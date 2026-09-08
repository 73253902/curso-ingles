// ================================================================
// FUNCIÓN: crear-pago
// Genera los datos necesarios para abrir el widget de pago de Wompi:
// una referencia única, el monto, y la firma de integridad — sin
// exponer nunca el secreto de integridad al navegador del alumno.
// ================================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ⚠️ Llaves de PRODUCCIÓN — los pagos con esto cobran dinero real.
const WOMPI_PUBLIC_KEY = 'pub_prod_1jiT6mRWx3vff1ApAqMKdfG67iCZOfUx';
const WOMPI_INTEGRITY_SECRET = 'prod_integrity_rGL9Cwb0rmGnhnTHIGhmzOUwFJU6QaDO';
const PRECIO_CURSO_COP = 1200000; // Precio del curso completo
const MONEDA = 'COP';

Deno.serve(async (req) => {
  try {
    const authHeader = req.headers.get('Authorization');
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader! } } }
    );

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if(userError || !user){
      return new Response(JSON.stringify({ error: 'No autenticado' }), { status: 401 });
    }

    const amountInCents = PRECIO_CURSO_COP * 100;
    const reference = 'curso-' + user.id + '-' + Date.now();

    // Firma de integridad: SHA-256 de referencia + monto + moneda + secreto
    const textoAFirmar = reference + amountInCents + MONEDA + WOMPI_INTEGRITY_SECRET;
    const encoder = new TextEncoder();
    const data = encoder.encode(textoAFirmar);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return new Response(JSON.stringify({
      publicKey: WOMPI_PUBLIC_KEY,
      amountInCents,
      currency: MONEDA,
      reference,
      signature
    }), { headers: { 'Content-Type': 'application/json' } });

  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
});

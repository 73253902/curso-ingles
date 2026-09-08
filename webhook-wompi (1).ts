// ================================================================
// FUNCIÓN: webhook-wompi
// Wompi llama a esta función automáticamente cuando un pago se
// confirma. Verifica que el aviso sea real (no falso), y si el pago
// fue aprobado, marca al alumno como "pagado" en la base de datos.
//
// Esta URL hay que pegarla en el panel de Wompi, en la sección de
// Eventos/Webhooks, una vez que la función esté publicada.
// ================================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ⚠️ Secreto de eventos de PRODUCCIÓN
const WOMPI_EVENTS_SECRET = 'prod_events_lXGrR11jj3j1WyS8FpCTsePgbjmDRpgL';

Deno.serve(async (req) => {
  try {
    const body = await req.json();
    const transaction = body.data.transaction;

    // Verificar que el aviso realmente viene de Wompi (evita pagos falsos)
    const textoAFirmar = transaction.id + transaction.status + transaction.amount_in_cents + body.timestamp + WOMPI_EVENTS_SECRET;
    const encoder = new TextEncoder();
    const data = encoder.encode(textoAFirmar);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const firmaCalculada = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if(firmaCalculada !== body.signature.checksum){
      return new Response(JSON.stringify({ error: 'Firma inválida — aviso descartado' }), { status: 400 });
    }

    // Solo actuar si el pago fue APROBADO
    if(transaction.status === 'APPROVED'){
      // La referencia tiene el formato: curso-{user_id}-{timestamp}
      const partes = transaction.reference.split('-');
      const userId = partes.slice(1, -1).join('-'); // por si el user_id tiene guiones

      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      );

      await supabaseAdmin
        .from('profiles')
        .update({ paid: true, paid_at: new Date().toISOString(), payment_reference: transaction.id })
        .eq('id', userId);
    }

    return new Response(JSON.stringify({ recibido: true }), { headers: { 'Content-Type': 'application/json' } });

  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
});

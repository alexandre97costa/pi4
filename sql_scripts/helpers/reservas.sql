-- ver onde é que há reservas (pi, evento, sessao, reserva)
select ponto_interesse.nome as "Ponto de Interesse", evento.nome as "Evento", sessao.data_hora as "Sessão", reserva.nome as "Reserva" from ponto_interesse 
inner join evento  on evento.ponto_interesse_id = ponto_interesse.id
inner join sessao  on sessao.evento_id = evento.id
inner join reserva on reserva.sessao_id = sessao.id
order by 1 asc, 2 asc, 3 asc, 4 asc
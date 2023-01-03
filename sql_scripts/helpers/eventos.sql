-- eventos com tipo, ponto de interesse, e sessoes
select e.nome, p.nome, t.nome, s.data_hora, e.num_pontos, e.num_vagas, e.num_horas from evento as e
full join sessao as s on s.evento_id = e.id
inner join ponto_interesse as p on p.id = e.ponto_interesse_id
inner join tipo_evento as t on t.id = e.tipo_evento_id;

-- evento com quantidade de sessões
select e.nome, p.nome, count(s.id) from evento as e
full join sessao as s on s.evento_id = e.id
inner join ponto_interesse as p on p.id = e.ponto_interesse_id
group by e.nome, p.nome
order by 3 desc, e.nome desc

-- evento com quantidade de reservas, separado por sessões
select e.nome, p.nome, s.data_hora, count(r.id) from evento as e
full join sessao as s on s.evento_id = e.id
full join reserva as r on s.id = r.sessao_id
inner join ponto_interesse as p on p.id = e.ponto_interesse_id
group by e.nome, p.nome, s.data_hora
order by 4 desc, s.data_hora asc, e.nome desc

-- o mesmo que em cima, mas só pra sessoes com pelo menos 1 reserva
select e.nome, p.nome, s.data_hora, count(r.id) from evento as e
full join sessao as s on s.evento_id = e.id
full join reserva as r on s.id = r.sessao_id
inner join ponto_interesse as p on p.id = e.ponto_interesse_id
group by e.nome, p.nome, s.data_hora
having (count(r.id) > 0)
order by 4 desc, s.data_hora asc, e.nome desc
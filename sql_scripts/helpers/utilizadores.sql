-- ver todos os utilizadores (id, nome) com o seu tipo
select u.id, u.nome, t.nome as "tipo" from utilizador as u
left join tipo_utilizador as t on u.tipo_utilizador_id = t.id
order by u.id

-- ver a quantidade de PIs que cada agente tem
-- maior quantidade primeiro
select u.nome, count(p.id) from utilizador as u
left join ponto_interesse as p on p.agente_turistico_id = u.id
where u.tipo_utilizador_id = 2
group by p.agente_turistico_id, u.nome
order by 2 desc, 1 asc

-- ver leaderboard de visitantes com mais scans
-- mais scans primeiro
select u.nome, count(sp.id) as "scans PI", count(se.id) as "scans E" from utilizador as u
left join scan_ponto_interesse as sp on sp.visitante_id = u.id
left join scan_evento as se on se.visitante_id = u.id
where u.tipo_utilizador_id = 1
group by sp.visitante_id, se.visitante_id, u.nome
order by 2 desc, 3 desc, 1 asc

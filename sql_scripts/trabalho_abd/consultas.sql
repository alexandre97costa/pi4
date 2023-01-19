select * from distrito
select * from municipio
select * from freguesia

select * from tipo_interesse
select * from ponto_interesse
select * from scan_ponto_interesse

select * from recompensa
select * from ponto_interesse_recompensa

select * from tipo_evento
select * from evento
select * from scan_evento

select * from reserva
select * from sessao
select * from voucher

select * from tipo_utilizador
select * from utilizador


select * from candidatura_at
select * from comentario_avaliacao
select * from imagem


----------------------------------------------------------------------------------------------------------------
-- Agrupamento
--Esta query permite-nos visualizar a quantidade de utilizadores que estão registados na nossa base de dados por tipo de utilizador

select tipo_utilizador.nome, tipo_utilizador.id, COUNT(utilizador.tipo_utilizador_id)
from tipo_utilizador
inner join utilizador
on utilizador.tipo_utilizador_id = tipo_utilizador.id
group by tipo_utilizador.id
order by tipo_utilizador.id ASC

-- query com acesso a quantos eventos foram scaneados pelos utilizadores e a média dos pontos recebidos de cada evento
select evento_id, 
round(AVG(pontos_recebidos),2) AS "Média dos pontos recebidos"
from scan_evento
group by evento_id


--melhorar este mais complexo diz o prof 
select tipo_utilizador_id, COUNT(*)
from utilizador
group by tipo_utilizador_id
order by tipo_utilizador_id ASC




----------------------------------------------------------------------------------------------------------------
-- Agregacao

-- esta query permitenos ter ideia de quantos pontos de interesse oferecem o mesmo valor de pontos, neste caso colocamos 10pontos e a resposta obtida foi 40 locais.

select count(validado) AS "Total de P.I. que foram validados que ofereçem 10 pontos"
from ponto_interesse 
where num_pontos = 10

-- média da avaliação deixada nos comentários
select round(AVG(avaliacao),2) 
from comentario_avaliacao 

-- através desta query conseguimos saber o total de pontos que a aplicação oferece na soma de todos os eventos, o mesmo dá para fazer para os pontos de interesse
select SUM(num_pontos) 
from evento	

-- com esta query sabemos quantos tipo de utilizadores diferentes temos registados na base de dados
select COUNT(DISTINCT tipo_utilizador_id) 
from utilizador

select COUNT(tipo_utilizador_id) from utilizador where tipo_utilizador_id = 3


-- Menos interessante soma o numero de pontos dos eventos que terminar com  a letra a 

select SUM(num_pontos) 
from evento 
where nome like '%a'


----------------------------------------------------------------------------------------------------------------
-- Inner Join

-- esta query permite-nos saber as reservas efetuadas aos eventos, quantas pessoas vão, qual o evento o número de pontos que ganha e a que tipo de evento como em que ponto de interesse acontece. 
SELECT *
FROM reserva AS R
JOIN evento AS E ON R.ID = E.ID

-- mostra-nos os comentarios, as avaliações e quem as fez
SELECT ca.comentario, ca.avaliacao, u.id, u.nome
FROM comentario_avaliacao AS ca
INNER JOIN utilizador AS u ON ca.ID = u.ID
 
-- mostra-nos os comentarios, as avaliações e quem as fez, mas também nos mostra quais foram os outilizadores que n deixaram comentarios e avaliacoes
SELECT ca.comentario, ca.avaliacao, u.id, u.nome
FROM comentario_avaliacao AS ca
RIGHT JOIN utilizador AS u ON ca.ID = u.ID

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

-- ver onde é que há reservas (pi, evento, sessao, reserva)
select ponto_interesse.nome as "Ponto de Interesse", evento.nome as "Evento", sessao.data_hora as "Sessão", reserva.nome as "Reserva" from ponto_interesse 
inner join evento  on evento.ponto_interesse_id = ponto_interesse.id
inner join sessao  on sessao.evento_id = evento.id
inner join reserva on reserva.sessao_id = sessao.id
order by 1 asc, 2 asc, 3 asc, 4 asc


----------------------------------------------------------------------------------------------------------------
-- Sub consultas
-- ATENCAO ISTO ESTA MAL 
--O objetivo da seguinte subconsulta é encontrar o utilizador que fez a reserva com o maior num de pessoas, neste caso que levou o maior número de pessoas com ele a um evento

SELECT utilizador.id, utilizador.nome, reserva.num_pessoas, evento.nome, evento.num_pontos
FROM utilizador, reserva, evento, sessao
WHERE utilizador.id = reserva.visitante_id
AND reserva.sessao_id = sessao_id
AND reserva.num_pessoas = (SELECT MAX(num_pessoas)
					FROM reserva)
-- Através desta subconsulta, conseguimos saber qual foi o utilizador que obteve mais pontos com o scan ao ponto de interesse
SELECT utilizador.id, utilizador.nome, utilizador.data_nascimento, scan_ponto_interesse.pontos_recebidos
FROM utilizador, scan_ponto_interesse
WHERE utilizador.id = scan_ponto_interesse.visitante_id
AND scan_ponto_interesse.pontos_recebidos = (SELECT MAX(pontos_recebidos) 
											 FROM scan_ponto_interesse)

-- Igual a anterior mas com o valor minimo 
SELECT ponto_interesse.id, ponto_interesse.nome, scan_ponto_interesse.pontos_recebidos
FROM ponto_interesse, scan_ponto_interesse
WHERE ponto_interesse.id = scan_ponto_interesse.visitante_id
AND scan_ponto_interesse.pontos_recebidos = (SELECT MIN(pontos_recebidos) 
											 FROM scan_ponto_interesse)


-- trigger 1
-- Sempre que há um scan a um ponto de interesse,
-- atualiza-se a contagem de scans

create or replace function atualizar_contagem() 
returns trigger 
as $$
begin
    -- atualizar o PI correspondente
    update ponto_interesse set count_scans = count_scans + 1 where id = NEW.ponto_interesse_id;
    
end; $$ 
language plpgsql;

create or replace trigger atualizar_contagem
after insert on scan_ponto_interesse
for each row execute function atualizar_contagem();


-- trigger 2
-- Sempre que há um novo comentário/avaliação a um PI,
-- atualiza-se a sua média de avaliação


-- trigger 3
-- Sempre que uma reserva é efetuada,
-- atualiza-se o numero de vagas disponiveis na sessao 
-- (contando com o numero de pessoas da reserva)


-- trigger 4
-- Sempre que a data de nascimento do utilizador é atualizada
-- verificar se tem mais de 13 anos
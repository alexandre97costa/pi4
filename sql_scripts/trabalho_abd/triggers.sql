-- trigger 1
-- Sempre que há um scan a um ponto de interesse,
-- atualiza-se a contagem de scans

create or replace function atualizar_contagem() 
returns trigger 
as $$
begin
    -- atualizar o PI correspondente
    update ponto_interesse 
    set count_scans = count_scans + 1 
    where id = NEW.ponto_interesse_id;
end; $$ 
language plpgsql;

create or replace trigger atualizar_contagem 
after insert on scan_ponto_interesse
for each row execute function atualizar_contagem();

-- trigger 2
-- Sempre que há um novo comentário/avaliação a um PI,
-- atualiza-se a sua média de avaliação

create or replace function atualizar_media() 
returns trigger 
as $$
begin
    -- atualizar o PI correspondente
    update ponto_interesse p
    set avg_avaliacao = (
        select round(avg(ca.avaliacao),1)
        from comentario_avaliacao ca
        group by ca.ponto_interesse_id
        having ca.ponto_interesse_id = p.id
    )
    where p.id = new.ponto_interesse_id;
    return null;
end; $$ 
language plpgsql;

create or replace trigger atualizar_media 
after insert on comentario_avaliacao
for each row execute function atualizar_media();

-- trigger 3
-- Sempre que uma reserva é efetuada,
-- verifica-se o numero de vagas na sessao correspondente,
-- e atualiza-se o numero de vagas disponiveis na sessao
-- (contando com o numero de pessoas da reserva)

create or replace function atualizar_vagas() 
returns trigger 
as $$
declare
    sessao_r record;
begin
    select * into sessao_r from sessao where id=new.sessao_id;

    if new.pessoas > sessao_r.vagas then
        raise exception 'Não existem vagas suficientes para satisfazer esta reserva.';
    else 
        -- atualizar a sessao correspondente
        update sessao s
        set vagas = vagas - new.pessoas
        where s.id = new.sessao_id;
    end if;
    
    return new;
end; $$ 
language plpgsql;

create or replace trigger atualizar_vagas 
before insert or update on reserva
for each row execute function atualizar_vagas();

 -- trigger 4
-- Sempre que a data de nascimento do utilizador é atualizada
-- verificar se tem mais de 13 anos

create or replace function utilizador_idade_legal() 
returns trigger 
as $$
declare
    year_count int;
begin

    select (extract(year from now()::date)) - (extract(year from new.data_nascimento::date)) into year_count;

    if year_count < 13 then
        raise exception 'O utilizador não pode ter menos de 13 anos.';
    end if;
    
    return new;
end; $$ 
language plpgsql;

create or replace trigger utilizador_idade_legal 
before insert or update on utilizador
for each row execute function utilizador_idade_legal();
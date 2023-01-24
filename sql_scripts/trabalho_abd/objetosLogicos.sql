----------------------------------------------------------------------------------------------

--Script de criação dos restantes objetos lógicos (triggers, procedimento armazenado e
--função). No caso do procedimento armazenado, o script deve ainda incluir as instruções
--que fazem executar o PA. No caso dos triggers, o script deve também conter as instruções
--DML que os ativam. Em ambos os casos (PA e triggers), o script deve ainda conter as
--consultas SQL que permitem averiguar o correto funcionamento desses objetos lógicos.

----------------------------------------------------------------------------------------------

-- Função 

-- criação da function
create or replace function todos_agentes(tipo_utilizador int) returns void
language plpgsql
as $$

declare
-- declaração da variável resulte.
resulte record;

begin

-- criação de um ciclo para retornar todos os utilizadores pedidos que irão estar,
-- guardados na variável resulte.
    FOR resulte IN SELECT * 
    FROM utilizador
    where tipo_utilizador_id = tipo_utilizador

-- criação de um loop para retornar apenas o nome dos utilizadores.
        LOOP
        RAISE NOTICE '%', resulte.nome;
        END LOOP;

end$$;

-- este select para devolver todos os utilizadores com id = 2.
select * from todos_agentes(2);


----------------------------------------------------------------------------------------------
-- Procedimento

-- criação do procedure
create or replace procedure mostrar_nome_data_ultimo()
language plpgsql

as $$

declare
-- declaração da variável record
    resulte record;

begin


-- select onde será guardada a informação na variável resulte
    select p.*, t.nome into strict resulte from scan_ponto_interesse p
    inner join utilizador t on p.visitante_id = t.id
    where p.id = (select max(id) from scan_ponto_interesse);

-- impressão do resultado requerido anteriormente
    raise notice 'Data: %, Utilizador: %', resulte.created_at, resulte.nome;

-- verificação de dados e erros
    exception
        when no_data_found then
        raise exception 'Não existem dados';
        when others then 
        raise exception 'Existem erros';
end$$;
call mostrar_nome_data_ultimo();

--
-- igual ao anterior porém apanha o scan mais recente pela data de criação em vez do id
-- criação do procedure
create or replace procedure mostrar_nome_data_ultimo()
language plpgsql

as $$

declare
-- declaração da variável record
    resulte record;

begin


-- select onde será guardada a informação na variável resulte
    select p.*, t.nome into strict resulte from scan_ponto_interesse p
    inner join utilizador t on p.visitante_id = t.id
    where p.created_at = (select max(created_at) from scan_ponto_interesse)
	limit 1;

-- impressão do resultado requerido anteriormente
    raise notice 'Data: %, Utilizador: %', resulte.created_at, resulte.nome;

-- verificação de dados e erros
    exception
        when no_data_found then
        raise exception 'Não existem dados';
        when others then 
        raise exception 'Existem erros';
		
end$$;
call mostrar_nome_data_ultimo();



--------------------------------------------------------------------------------
-- Triggers

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
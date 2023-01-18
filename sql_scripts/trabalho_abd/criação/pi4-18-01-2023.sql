--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2023-01-18 14:02:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 247 (class 1255 OID 327329)
-- Name: atualizar_contagem(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.atualizar_contagem() RETURNS trigger
    LANGUAGE plpgsql
    AS $$begin
    -- atualizar o PI correspondente
    update ponto_interesse set count_scans = count_scans + 1 where id = NEW.ponto_interesse_id;
end; $$;


ALTER FUNCTION public.atualizar_contagem() OWNER TO postgres;

--
-- TOC entry 252 (class 1255 OID 598975)
-- Name: atualizar_media(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.atualizar_media() RETURNS trigger
    LANGUAGE plpgsql
    AS $$begin
    -- atualizar o PI correspondente
    
    update ponto_interesse as "p"
    set avg_avaliacao = (
        select round(avg(ca.avaliacao),1)
        from comentario_avaliacao as ca
        where ca.ponto_interesse_id = p.id
        group by ca.ponto_interesse_id
    )
    where p.id = new.ponto_interesse_id;
    return null;
end; $$;


ALTER FUNCTION public.atualizar_media() OWNER TO postgres;

--
-- TOC entry 261 (class 1255 OID 601519)
-- Name: atualizar_vagas(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.atualizar_vagas() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
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
end; $$;


ALTER FUNCTION public.atualizar_vagas() OWNER TO postgres;

--
-- TOC entry 248 (class 1255 OID 601521)
-- Name: utilizador_idade_legal(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.utilizador_idade_legal() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
    year_count int;
begin

    select (extract(year from now()::date)) - (extract(year from new.data_nascimento::date)) into year_count;

    if year_count < 13 then
        raise exception 'O utilizador não pode ter menos de 13 anos.';
    end if;
    
    return new;
end; $$;


ALTER FUNCTION public.utilizador_idade_legal() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 597032)
-- Name: candidatura_at; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidatura_at (
    id integer NOT NULL,
    localidade_at character varying(50) NOT NULL,
    texto_candidatura character varying(512) NOT NULL,
    estado boolean,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    distrito_id integer,
    visitante_id integer
);


ALTER TABLE public.candidatura_at OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 597031)
-- Name: candidatura_at_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidatura_at_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.candidatura_at_id_seq OWNER TO postgres;

--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 215
-- Name: candidatura_at_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidatura_at_id_seq OWNED BY public.candidatura_at.id;


--
-- TOC entry 226 (class 1259 OID 597111)
-- Name: comentario_avaliacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentario_avaliacao (
    id integer NOT NULL,
    comentario character varying(255),
    avaliacao integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    visitante_id integer,
    ponto_interesse_id integer
);


ALTER TABLE public.comentario_avaliacao OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 597110)
-- Name: comentario_avaliacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentario_avaliacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentario_avaliacao_id_seq OWNER TO postgres;

--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 225
-- Name: comentario_avaliacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentario_avaliacao_id_seq OWNED BY public.comentario_avaliacao.id;


--
-- TOC entry 214 (class 1259 OID 597020)
-- Name: distrito; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.distrito (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    responsavel_regiao_id integer
);


ALTER TABLE public.distrito OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 597019)
-- Name: distrito_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.distrito_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.distrito_id_seq OWNER TO postgres;

--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 213
-- Name: distrito_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.distrito_id_seq OWNED BY public.distrito.id;


--
-- TOC entry 230 (class 1259 OID 597137)
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    pontos integer NOT NULL,
    horas_duracao integer DEFAULT 1 NOT NULL,
    codigo_uuid uuid,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    ponto_interesse_id integer,
    tipo_evento_id integer,
    lotacao integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 597136)
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.evento_id_seq OWNER TO postgres;

--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 229
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.evento.id;


--
-- TOC entry 220 (class 1259 OID 597063)
-- Name: freguesia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.freguesia (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    municipio_id integer
);


ALTER TABLE public.freguesia OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 597062)
-- Name: freguesia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.freguesia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.freguesia_id_seq OWNER TO postgres;

--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 219
-- Name: freguesia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.freguesia_id_seq OWNED BY public.freguesia.id;


--
-- TOC entry 232 (class 1259 OID 597158)
-- Name: imagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.imagem (
    id integer NOT NULL,
    blob bytea,
    url character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    ponto_interesse_id integer
);


ALTER TABLE public.imagem OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 597157)
-- Name: imagem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.imagem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.imagem_id_seq OWNER TO postgres;

--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 231
-- Name: imagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.imagem_id_seq OWNED BY public.imagem.id;


--
-- TOC entry 218 (class 1259 OID 597051)
-- Name: municipio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.municipio (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    distrito_id integer
);


ALTER TABLE public.municipio OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 597050)
-- Name: municipio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.municipio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.municipio_id_seq OWNER TO postgres;

--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 217
-- Name: municipio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.municipio_id_seq OWNED BY public.municipio.id;


--
-- TOC entry 224 (class 1259 OID 597084)
-- Name: ponto_interesse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ponto_interesse (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    morada character varying(255) NOT NULL,
    codigo_postal character varying(8) NOT NULL,
    telemovel character varying(50) NOT NULL,
    pontos integer NOT NULL,
    descricao character varying(255) NOT NULL,
    validado boolean DEFAULT false,
    count_scans integer DEFAULT 0,
    avg_avaliacao numeric DEFAULT 0,
    codigo_uuid uuid,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    freguesia_id integer,
    agente_turistico_id integer,
    tipo_interesse_id integer
);


ALTER TABLE public.ponto_interesse OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 597083)
-- Name: ponto_interesse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ponto_interesse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ponto_interesse_id_seq OWNER TO postgres;

--
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 223
-- Name: ponto_interesse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ponto_interesse_id_seq OWNED BY public.ponto_interesse.id;


--
-- TOC entry 236 (class 1259 OID 597186)
-- Name: ponto_interesse_recompensa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ponto_interesse_recompensa (
    id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    ponto_interesse_id integer,
    recompensa_id integer
);


ALTER TABLE public.ponto_interesse_recompensa OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 597185)
-- Name: ponto_interesse_recompensa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ponto_interesse_recompensa_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ponto_interesse_recompensa_id_seq OWNER TO postgres;

--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 235
-- Name: ponto_interesse_recompensa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ponto_interesse_recompensa_id_seq OWNED BY public.ponto_interesse_recompensa.id;


--
-- TOC entry 234 (class 1259 OID 597172)
-- Name: recompensa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recompensa (
    id integer NOT NULL,
    validado boolean NOT NULL,
    titulo character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    pontos integer NOT NULL,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    tipo_interesse_id integer
);


ALTER TABLE public.recompensa OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 597171)
-- Name: recompensa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recompensa_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recompensa_id_seq OWNER TO postgres;

--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 233
-- Name: recompensa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recompensa_id_seq OWNED BY public.recompensa.id;


--
-- TOC entry 244 (class 1259 OID 597250)
-- Name: reserva; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reserva (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    pessoas integer NOT NULL,
    validado boolean DEFAULT false,
    codigo_confirmacao character varying(5) NOT NULL,
    confirmado boolean DEFAULT false,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    visitante_id integer,
    sessao_id integer
);


ALTER TABLE public.reserva OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 597249)
-- Name: reserva_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reserva_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reserva_id_seq OWNER TO postgres;

--
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 243
-- Name: reserva_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reserva_id_seq OWNED BY public.reserva.id;


--
-- TOC entry 238 (class 1259 OID 597203)
-- Name: scan_evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scan_evento (
    id integer NOT NULL,
    pontos_recebidos integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    evento_id integer,
    visitante_id integer
);


ALTER TABLE public.scan_evento OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 597202)
-- Name: scan_evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.scan_evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scan_evento_id_seq OWNER TO postgres;

--
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 237
-- Name: scan_evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.scan_evento_id_seq OWNED BY public.scan_evento.id;


--
-- TOC entry 240 (class 1259 OID 597220)
-- Name: scan_ponto_interesse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scan_ponto_interesse (
    id integer NOT NULL,
    pontos_recebidos integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    ponto_interesse_id integer,
    visitante_id integer
);


ALTER TABLE public.scan_ponto_interesse OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 597219)
-- Name: scan_ponto_interesse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.scan_ponto_interesse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scan_ponto_interesse_id_seq OWNER TO postgres;

--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 239
-- Name: scan_ponto_interesse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.scan_ponto_interesse_id_seq OWNED BY public.scan_ponto_interesse.id;


--
-- TOC entry 242 (class 1259 OID 597237)
-- Name: sessao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessao (
    id integer NOT NULL,
    data_hora timestamp with time zone DEFAULT '2023-01-17 18:03:55.195+00'::timestamp with time zone NOT NULL,
    inicio_evento boolean,
    fim_evento boolean,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    evento_id integer,
    vagas integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.sessao OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 597236)
-- Name: sessao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessao_id_seq OWNER TO postgres;

--
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 241
-- Name: sessao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessao_id_seq OWNED BY public.sessao.id;


--
-- TOC entry 228 (class 1259 OID 597128)
-- Name: tipo_evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_evento (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.tipo_evento OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 597127)
-- Name: tipo_evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_evento_id_seq OWNER TO postgres;

--
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 227
-- Name: tipo_evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_evento_id_seq OWNED BY public.tipo_evento.id;


--
-- TOC entry 222 (class 1259 OID 597075)
-- Name: tipo_interesse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_interesse (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.tipo_interesse OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 597074)
-- Name: tipo_interesse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_interesse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_interesse_id_seq OWNER TO postgres;

--
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 221
-- Name: tipo_interesse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_interesse_id_seq OWNED BY public.tipo_interesse.id;


--
-- TOC entry 210 (class 1259 OID 596994)
-- Name: tipo_utilizador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_utilizador (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    observacoes character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.tipo_utilizador OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 596993)
-- Name: tipo_utilizador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_utilizador_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_utilizador_id_seq OWNER TO postgres;

--
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 209
-- Name: tipo_utilizador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_utilizador_id_seq OWNED BY public.tipo_utilizador.id;


--
-- TOC entry 212 (class 1259 OID 597003)
-- Name: utilizador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilizador (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    data_nascimento date NOT NULL,
    pontos integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    tipo_utilizador_id integer
);


ALTER TABLE public.utilizador OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 597002)
-- Name: utilizador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utilizador_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.utilizador_id_seq OWNER TO postgres;

--
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 211
-- Name: utilizador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.utilizador_id_seq OWNED BY public.utilizador.id;


--
-- TOC entry 246 (class 1259 OID 597271)
-- Name: voucher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voucher (
    id integer NOT NULL,
    data_compra date NOT NULL,
    data_validade date NOT NULL,
    data_usado timestamp with time zone,
    pontos_gastos integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    recompensa_id integer,
    visitante_id integer
);


ALTER TABLE public.voucher OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 597270)
-- Name: voucher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voucher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voucher_id_seq OWNER TO postgres;

--
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 245
-- Name: voucher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voucher_id_seq OWNED BY public.voucher.id;


--
-- TOC entry 3262 (class 2604 OID 597035)
-- Name: candidatura_at id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidatura_at ALTER COLUMN id SET DEFAULT nextval('public.candidatura_at_id_seq'::regclass);


--
-- TOC entry 3270 (class 2604 OID 597114)
-- Name: comentario_avaliacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario_avaliacao ALTER COLUMN id SET DEFAULT nextval('public.comentario_avaliacao_id_seq'::regclass);


--
-- TOC entry 3261 (class 2604 OID 597023)
-- Name: distrito id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.distrito ALTER COLUMN id SET DEFAULT nextval('public.distrito_id_seq'::regclass);


--
-- TOC entry 3272 (class 2604 OID 597140)
-- Name: evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);


--
-- TOC entry 3264 (class 2604 OID 597066)
-- Name: freguesia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freguesia ALTER COLUMN id SET DEFAULT nextval('public.freguesia_id_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 597161)
-- Name: imagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagem ALTER COLUMN id SET DEFAULT nextval('public.imagem_id_seq'::regclass);


--
-- TOC entry 3263 (class 2604 OID 597054)
-- Name: municipio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio ALTER COLUMN id SET DEFAULT nextval('public.municipio_id_seq'::regclass);


--
-- TOC entry 3266 (class 2604 OID 597087)
-- Name: ponto_interesse id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse ALTER COLUMN id SET DEFAULT nextval('public.ponto_interesse_id_seq'::regclass);


--
-- TOC entry 3277 (class 2604 OID 597189)
-- Name: ponto_interesse_recompensa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse_recompensa ALTER COLUMN id SET DEFAULT nextval('public.ponto_interesse_recompensa_id_seq'::regclass);


--
-- TOC entry 3276 (class 2604 OID 597175)
-- Name: recompensa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recompensa ALTER COLUMN id SET DEFAULT nextval('public.recompensa_id_seq'::regclass);


--
-- TOC entry 3283 (class 2604 OID 597253)
-- Name: reserva id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva ALTER COLUMN id SET DEFAULT nextval('public.reserva_id_seq'::regclass);


--
-- TOC entry 3278 (class 2604 OID 597206)
-- Name: scan_evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_evento ALTER COLUMN id SET DEFAULT nextval('public.scan_evento_id_seq'::regclass);


--
-- TOC entry 3279 (class 2604 OID 597223)
-- Name: scan_ponto_interesse id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_ponto_interesse ALTER COLUMN id SET DEFAULT nextval('public.scan_ponto_interesse_id_seq'::regclass);


--
-- TOC entry 3280 (class 2604 OID 597240)
-- Name: sessao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao ALTER COLUMN id SET DEFAULT nextval('public.sessao_id_seq'::regclass);


--
-- TOC entry 3271 (class 2604 OID 597131)
-- Name: tipo_evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_evento ALTER COLUMN id SET DEFAULT nextval('public.tipo_evento_id_seq'::regclass);


--
-- TOC entry 3265 (class 2604 OID 597078)
-- Name: tipo_interesse id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_interesse ALTER COLUMN id SET DEFAULT nextval('public.tipo_interesse_id_seq'::regclass);


--
-- TOC entry 3258 (class 2604 OID 596997)
-- Name: tipo_utilizador id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_utilizador ALTER COLUMN id SET DEFAULT nextval('public.tipo_utilizador_id_seq'::regclass);


--
-- TOC entry 3259 (class 2604 OID 597006)
-- Name: utilizador id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador ALTER COLUMN id SET DEFAULT nextval('public.utilizador_id_seq'::regclass);


--
-- TOC entry 3286 (class 2604 OID 597274)
-- Name: voucher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher ALTER COLUMN id SET DEFAULT nextval('public.voucher_id_seq'::regclass);



SELECT pg_catalog.setval('public.candidatura_at_id_seq', 2, true);


--
-- TOC entry 3608 (class 0 OID 0)
-- Dependencies: 225
-- Name: comentario_avaliacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentario_avaliacao_id_seq', 9, true);


--
-- TOC entry 3609 (class 0 OID 0)
-- Dependencies: 213
-- Name: distrito_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.distrito_id_seq', 23, true);


--
-- TOC entry 3610 (class 0 OID 0)
-- Dependencies: 229
-- Name: evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_id_seq', 11, true);


--
-- TOC entry 3611 (class 0 OID 0)
-- Dependencies: 219
-- Name: freguesia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.freguesia_id_seq', 4290, true);


--
-- TOC entry 3612 (class 0 OID 0)
-- Dependencies: 231
-- Name: imagem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.imagem_id_seq', 5, true);


--
-- TOC entry 3613 (class 0 OID 0)
-- Dependencies: 217
-- Name: municipio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.municipio_id_seq', 309, true);


--
-- TOC entry 3614 (class 0 OID 0)
-- Dependencies: 223
-- Name: ponto_interesse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ponto_interesse_id_seq', 45, true);


--
-- TOC entry 3615 (class 0 OID 0)
-- Dependencies: 235
-- Name: ponto_interesse_recompensa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ponto_interesse_recompensa_id_seq', 3, true);


--
-- TOC entry 3616 (class 0 OID 0)
-- Dependencies: 233
-- Name: recompensa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recompensa_id_seq', 4, true);


--
-- TOC entry 3617 (class 0 OID 0)
-- Dependencies: 243
-- Name: reserva_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reserva_id_seq', 10, true);


--
-- TOC entry 3618 (class 0 OID 0)
-- Dependencies: 237
-- Name: scan_evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.scan_evento_id_seq', 1, false);


--
-- TOC entry 3619 (class 0 OID 0)
-- Dependencies: 239
-- Name: scan_ponto_interesse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.scan_ponto_interesse_id_seq', 11, true);


--
-- TOC entry 3620 (class 0 OID 0)
-- Dependencies: 241
-- Name: sessao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessao_id_seq', 9, true);


--
-- TOC entry 3621 (class 0 OID 0)
-- Dependencies: 227
-- Name: tipo_evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_evento_id_seq', 10, true);


--
-- TOC entry 3622 (class 0 OID 0)
-- Dependencies: 221
-- Name: tipo_interesse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_interesse_id_seq', 10, true);


--
-- TOC entry 3623 (class 0 OID 0)
-- Dependencies: 209
-- Name: tipo_utilizador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_utilizador_id_seq', 1, false);


--
-- TOC entry 3624 (class 0 OID 0)
-- Dependencies: 211
-- Name: utilizador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilizador_id_seq', 28, true);


--
-- TOC entry 3625 (class 0 OID 0)
-- Dependencies: 245
-- Name: voucher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voucher_id_seq', 5, true);


--
-- TOC entry 3346 (class 2606 OID 597039)
-- Name: candidatura_at candidatura_at_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidatura_at
    ADD CONSTRAINT candidatura_at_pkey PRIMARY KEY (id);


--
-- TOC entry 3356 (class 2606 OID 597116)
-- Name: comentario_avaliacao comentario_avaliacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario_avaliacao
    ADD CONSTRAINT comentario_avaliacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3344 (class 2606 OID 597025)
-- Name: distrito distrito_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT distrito_pkey PRIMARY KEY (id);


--
-- TOC entry 3360 (class 2606 OID 597146)
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- TOC entry 3350 (class 2606 OID 597068)
-- Name: freguesia freguesia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freguesia
    ADD CONSTRAINT freguesia_pkey PRIMARY KEY (id);


--
-- TOC entry 3362 (class 2606 OID 597165)
-- Name: imagem imagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagem
    ADD CONSTRAINT imagem_pkey PRIMARY KEY (id);


--
-- TOC entry 3348 (class 2606 OID 597056)
-- Name: municipio municipio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_pkey PRIMARY KEY (id);


--
-- TOC entry 3354 (class 2606 OID 597094)
-- Name: ponto_interesse ponto_interesse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse
    ADD CONSTRAINT ponto_interesse_pkey PRIMARY KEY (id);


--
-- TOC entry 3366 (class 2606 OID 597191)
-- Name: ponto_interesse_recompensa ponto_interesse_recompensa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse_recompensa
    ADD CONSTRAINT ponto_interesse_recompensa_pkey PRIMARY KEY (id);


--
-- TOC entry 3364 (class 2606 OID 597179)
-- Name: recompensa recompensa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recompensa
    ADD CONSTRAINT recompensa_pkey PRIMARY KEY (id);


--
-- TOC entry 3374 (class 2606 OID 597259)
-- Name: reserva reserva_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT reserva_pkey PRIMARY KEY (id);


--
-- TOC entry 3368 (class 2606 OID 597208)
-- Name: scan_evento scan_evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_evento
    ADD CONSTRAINT scan_evento_pkey PRIMARY KEY (id);


--
-- TOC entry 3370 (class 2606 OID 597225)
-- Name: scan_ponto_interesse scan_ponto_interesse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_ponto_interesse
    ADD CONSTRAINT scan_ponto_interesse_pkey PRIMARY KEY (id);


--
-- TOC entry 3372 (class 2606 OID 597243)
-- Name: sessao sessao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao
    ADD CONSTRAINT sessao_pkey PRIMARY KEY (id);


--
-- TOC entry 3358 (class 2606 OID 597135)
-- Name: tipo_evento tipo_evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_evento
    ADD CONSTRAINT tipo_evento_pkey PRIMARY KEY (id);


--
-- TOC entry 3352 (class 2606 OID 597082)
-- Name: tipo_interesse tipo_interesse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_interesse
    ADD CONSTRAINT tipo_interesse_pkey PRIMARY KEY (id);


--
-- TOC entry 3288 (class 2606 OID 597001)
-- Name: tipo_utilizador tipo_utilizador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_utilizador
    ADD CONSTRAINT tipo_utilizador_pkey PRIMARY KEY (id);


--
-- TOC entry 3290 (class 2606 OID 601325)
-- Name: utilizador utilizador_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key UNIQUE (email);


--
-- TOC entry 3292 (class 2606 OID 601327)
-- Name: utilizador utilizador_email_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key1 UNIQUE (email);


--
-- TOC entry 3294 (class 2606 OID 601343)
-- Name: utilizador utilizador_email_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key10 UNIQUE (email);


--
-- TOC entry 3296 (class 2606 OID 601345)
-- Name: utilizador utilizador_email_key11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key11 UNIQUE (email);


--
-- TOC entry 3298 (class 2606 OID 601347)
-- Name: utilizador utilizador_email_key12; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key12 UNIQUE (email);


--
-- TOC entry 3300 (class 2606 OID 601349)
-- Name: utilizador utilizador_email_key13; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key13 UNIQUE (email);


--
-- TOC entry 3302 (class 2606 OID 601321)
-- Name: utilizador utilizador_email_key14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key14 UNIQUE (email);


--
-- TOC entry 3304 (class 2606 OID 601351)
-- Name: utilizador utilizador_email_key15; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key15 UNIQUE (email);


--
-- TOC entry 3306 (class 2606 OID 601353)
-- Name: utilizador utilizador_email_key16; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key16 UNIQUE (email);


--
-- TOC entry 3308 (class 2606 OID 601355)
-- Name: utilizador utilizador_email_key17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key17 UNIQUE (email);


--
-- TOC entry 3310 (class 2606 OID 601319)
-- Name: utilizador utilizador_email_key18; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key18 UNIQUE (email);


--
-- TOC entry 3312 (class 2606 OID 601357)
-- Name: utilizador utilizador_email_key19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key19 UNIQUE (email);


--
-- TOC entry 3314 (class 2606 OID 601329)
-- Name: utilizador utilizador_email_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key2 UNIQUE (email);


--
-- TOC entry 3316 (class 2606 OID 601359)
-- Name: utilizador utilizador_email_key20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key20 UNIQUE (email);


--
-- TOC entry 3318 (class 2606 OID 601361)
-- Name: utilizador utilizador_email_key21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key21 UNIQUE (email);


--
-- TOC entry 3320 (class 2606 OID 601363)
-- Name: utilizador utilizador_email_key22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key22 UNIQUE (email);


--
-- TOC entry 3322 (class 2606 OID 601365)
-- Name: utilizador utilizador_email_key23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key23 UNIQUE (email);


--
-- TOC entry 3324 (class 2606 OID 601367)
-- Name: utilizador utilizador_email_key24; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key24 UNIQUE (email);


--
-- TOC entry 3326 (class 2606 OID 601317)
-- Name: utilizador utilizador_email_key25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key25 UNIQUE (email);


--
-- TOC entry 3328 (class 2606 OID 601331)
-- Name: utilizador utilizador_email_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key3 UNIQUE (email);


--
-- TOC entry 3330 (class 2606 OID 601333)
-- Name: utilizador utilizador_email_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key4 UNIQUE (email);


--
-- TOC entry 3332 (class 2606 OID 601335)
-- Name: utilizador utilizador_email_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key5 UNIQUE (email);


--
-- TOC entry 3334 (class 2606 OID 601323)
-- Name: utilizador utilizador_email_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key6 UNIQUE (email);


--
-- TOC entry 3336 (class 2606 OID 601337)
-- Name: utilizador utilizador_email_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key7 UNIQUE (email);


--
-- TOC entry 3338 (class 2606 OID 601339)
-- Name: utilizador utilizador_email_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key8 UNIQUE (email);


--
-- TOC entry 3340 (class 2606 OID 601341)
-- Name: utilizador utilizador_email_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_email_key9 UNIQUE (email);


--
-- TOC entry 3342 (class 2606 OID 597011)
-- Name: utilizador utilizador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_pkey PRIMARY KEY (id);


--
-- TOC entry 3376 (class 2606 OID 597276)
-- Name: voucher voucher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT voucher_pkey PRIMARY KEY (id);


--
-- TOC entry 3404 (class 2620 OID 598976)
-- Name: comentario_avaliacao atualizar_media; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER atualizar_media AFTER INSERT ON public.comentario_avaliacao FOR EACH ROW EXECUTE FUNCTION public.atualizar_media();


--
-- TOC entry 3405 (class 2620 OID 601520)
-- Name: reserva atualizar_vagas; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER atualizar_vagas BEFORE INSERT OR UPDATE ON public.reserva FOR EACH ROW EXECUTE FUNCTION public.atualizar_vagas();


--
-- TOC entry 3403 (class 2620 OID 601522)
-- Name: utilizador utilizador_idade_legal; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER utilizador_idade_legal BEFORE INSERT OR UPDATE ON public.utilizador FOR EACH ROW EXECUTE FUNCTION public.utilizador_idade_legal();


--
-- TOC entry 3379 (class 2606 OID 601380)
-- Name: candidatura_at candidatura_at_distrito_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidatura_at
    ADD CONSTRAINT candidatura_at_distrito_id_fkey FOREIGN KEY (distrito_id) REFERENCES public.distrito(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3380 (class 2606 OID 601385)
-- Name: candidatura_at candidatura_at_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidatura_at
    ADD CONSTRAINT candidatura_at_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3387 (class 2606 OID 601426)
-- Name: comentario_avaliacao comentario_avaliacao_ponto_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario_avaliacao
    ADD CONSTRAINT comentario_avaliacao_ponto_interesse_id_fkey FOREIGN KEY (ponto_interesse_id) REFERENCES public.ponto_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3386 (class 2606 OID 601421)
-- Name: comentario_avaliacao comentario_avaliacao_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario_avaliacao
    ADD CONSTRAINT comentario_avaliacao_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3378 (class 2606 OID 601375)
-- Name: distrito distrito_responsavel_regiao_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT distrito_responsavel_regiao_id_fkey FOREIGN KEY (responsavel_regiao_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3388 (class 2606 OID 601433)
-- Name: evento evento_ponto_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_ponto_interesse_id_fkey FOREIGN KEY (ponto_interesse_id) REFERENCES public.ponto_interesse(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3389 (class 2606 OID 601438)
-- Name: evento evento_tipo_evento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_tipo_evento_id_fkey FOREIGN KEY (tipo_evento_id) REFERENCES public.tipo_evento(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3382 (class 2606 OID 601395)
-- Name: freguesia freguesia_municipio_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freguesia
    ADD CONSTRAINT freguesia_municipio_id_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipio(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3390 (class 2606 OID 601445)
-- Name: imagem imagem_ponto_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagem
    ADD CONSTRAINT imagem_ponto_interesse_id_fkey FOREIGN KEY (ponto_interesse_id) REFERENCES public.ponto_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3381 (class 2606 OID 601390)
-- Name: municipio municipio_distrito_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_distrito_id_fkey FOREIGN KEY (distrito_id) REFERENCES public.distrito(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3384 (class 2606 OID 601411)
-- Name: ponto_interesse ponto_interesse_agente_turistico_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse
    ADD CONSTRAINT ponto_interesse_agente_turistico_id_fkey FOREIGN KEY (agente_turistico_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3383 (class 2606 OID 601406)
-- Name: ponto_interesse ponto_interesse_freguesia_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse
    ADD CONSTRAINT ponto_interesse_freguesia_id_fkey FOREIGN KEY (freguesia_id) REFERENCES public.freguesia(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3392 (class 2606 OID 601455)
-- Name: ponto_interesse_recompensa ponto_interesse_recompensa_ponto_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse_recompensa
    ADD CONSTRAINT ponto_interesse_recompensa_ponto_interesse_id_fkey FOREIGN KEY (ponto_interesse_id) REFERENCES public.ponto_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3393 (class 2606 OID 601460)
-- Name: ponto_interesse_recompensa ponto_interesse_recompensa_recompensa_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse_recompensa
    ADD CONSTRAINT ponto_interesse_recompensa_recompensa_id_fkey FOREIGN KEY (recompensa_id) REFERENCES public.recompensa(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3385 (class 2606 OID 601416)
-- Name: ponto_interesse ponto_interesse_tipo_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ponto_interesse
    ADD CONSTRAINT ponto_interesse_tipo_interesse_id_fkey FOREIGN KEY (tipo_interesse_id) REFERENCES public.tipo_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3391 (class 2606 OID 601450)
-- Name: recompensa recompensa_tipo_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recompensa
    ADD CONSTRAINT recompensa_tipo_interesse_id_fkey FOREIGN KEY (tipo_interesse_id) REFERENCES public.tipo_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3400 (class 2606 OID 601503)
-- Name: reserva reserva_sessao_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT reserva_sessao_id_fkey FOREIGN KEY (sessao_id) REFERENCES public.sessao(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3399 (class 2606 OID 601498)
-- Name: reserva reserva_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT reserva_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3394 (class 2606 OID 601465)
-- Name: scan_evento scan_evento_evento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_evento
    ADD CONSTRAINT scan_evento_evento_id_fkey FOREIGN KEY (evento_id) REFERENCES public.evento(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3395 (class 2606 OID 601470)
-- Name: scan_evento scan_evento_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_evento
    ADD CONSTRAINT scan_evento_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3396 (class 2606 OID 601475)
-- Name: scan_ponto_interesse scan_ponto_interesse_ponto_interesse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_ponto_interesse
    ADD CONSTRAINT scan_ponto_interesse_ponto_interesse_id_fkey FOREIGN KEY (ponto_interesse_id) REFERENCES public.ponto_interesse(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3397 (class 2606 OID 601480)
-- Name: scan_ponto_interesse scan_ponto_interesse_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scan_ponto_interesse
    ADD CONSTRAINT scan_ponto_interesse_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3398 (class 2606 OID 601487)
-- Name: sessao sessao_evento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao
    ADD CONSTRAINT sessao_evento_id_fkey FOREIGN KEY (evento_id) REFERENCES public.evento(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3377 (class 2606 OID 601370)
-- Name: utilizador utilizador_tipo_utilizador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_tipo_utilizador_id_fkey FOREIGN KEY (tipo_utilizador_id) REFERENCES public.tipo_utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3401 (class 2606 OID 601508)
-- Name: voucher voucher_recompensa_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT voucher_recompensa_id_fkey FOREIGN KEY (recompensa_id) REFERENCES public.recompensa(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3402 (class 2606 OID 601513)
-- Name: voucher voucher_visitante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT voucher_visitante_id_fkey FOREIGN KEY (visitante_id) REFERENCES public.utilizador(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2023-01-18 14:02:28

--
-- PostgreSQL database dump complete
--


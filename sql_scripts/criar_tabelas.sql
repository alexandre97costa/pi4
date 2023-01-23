CREATE SEQUENCE tipo_evento_id_seq;
CREATE TABLE tipo_evento (
	id	 			PRIMARY KEY DEFAULT nextval('tipo_evento_id_seq'),
	nome			VARCHAR(255) NOT NULL,
	observacoes		VARCHAR(255),
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
);

CREATE SEQUENCE tipo_interesse_id_seq;
CREATE TABLE tipo_interesse (
	id 				PRIMARY KEY DEFAULT nextval('tipo_interesse_id_seq'),
	nome			VARCHAR(255) NOT NULL,
	observacoes	 	VARCHAR(255),
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
);

CREATE SEQUENCE tipo_utilizador_id_seq;
CREATE TABLE tipo_utilizador (
	id	 			PRIMARY KEY DEFAULT nextval('tipo_utilizador_id_seq'),
	nome			VARCHAR(255) NOT NULL,
	observacoes		VARCHAR(255),
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
);

CREATE SEQUENCE utilizador_id_seq;
CREATE TABLE utilizador (
	id					PRIMARY KEY DEFAULT nextval('utilizador_id_seq'),
	nome				VARCHAR(255) NOT NULL,
	email				VARCHAR(100) NOT NULL,
	password			VARCHAR(512) NOT NULL,
	data_nascimento		DATE NOT NULL,
	pontos				INTEGER NOT NULL,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	tipo_utilizador_id 	INTEGER NOT NULL,

	CONSTRAINT tipo_utilizador FOREIGN KEY(tipo_utilizador_id) REFERENCES tipo_utilizador(id),
);

CREATE SEQUENCE distrito_id_seq;
CREATE TABLE distrito (
	id					PRIMARY KEY DEFAULT nextval('distrito_id_seq'),
	nome				VARCHAR(255) NOT NULL,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	responsavel_regiao_id 	INTEGER NOT NULL,

	CONSTRAINT responsavel_regiao FOREIGN KEY(responsavel_regiao_id) REFERENCES utilizador(id),
);

CREATE SEQUENCE municipio_id_seq;
CREATE TABLE municipio (
	id				PRIMARY KEY DEFAULT nextval('municipio_id_seq'),
	nome			VARCHAR(255) NOT NULL,
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
	distrito_id 	INTEGER NOT NULL,

	CONSTRAINT distrito FOREIGN KEY(distrito_id) REFERENCES distrito(id),
);

CREATE SEQUENCE freguesia_id_seq;
CREATE TABLE freguesia (
	id				PRIMARY KEY DEFAULT nextval('freguesia_id_seq'),
	nome			VARCHAR(255) NOT NULL,
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
	municipio_id 	INTEGER NOT NULL,	

	CONSTRAINT municipio FOREIGN KEY(municipio_id) REFERENCES municipio(id),
);

CREATE SEQUENCE ponto_interesse_id_seq;
CREATE TABLE ponto_interesse (
	id					PRIMARY KEY DEFAULT nextval('ponto_interesse_id_seq'),
	nome				VARCHAR(255) NOT NULL,
	morada				VARCHAR(255) NOT NULL,
	codigo_postal		VARCHAR(8) NOT NULL,
	telemovel			VARCHAR(50) NOT NULL,
	pontos				INTEGER NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	validado			BOOLEAN NOT NULL DEFAULT FALSE,
	count_scans			INTEGER DEFAULT 0,
	avg_avaliacao		NUMERIC DEFAULT 0.00,
	codigo_uuid			UUID,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	freguesia_id		INTEGER NOT NULL,
	tipo_interesse_id 	INTEGER NOT NULL,
	agente_turistico_id INTEGER NOT NULL,

	CONSTRAINT freguesia FOREIGN KEY(freguesia_id) REFERENCES freguesia(id),
	CONSTRAINT tipo_interesse FOREIGN KEY(tipo_interesse_id) REFERENCES tipo_interesse(id),
	CONSTRAINT agente_turistico FOREIGN KEY(agente_turistico_id) REFERENCES agente_turistico(id),
);

CREATE SEQUENCE scan_ponto_interesse_id_seq;
CREATE TABLE scan_ponto_interesse (
	id 					PRIMARY KEY DEFAULT nextval('scan_ponto_interesse_id_seq'),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	visitante_id		INTEGER NOT NULL,

	CONSTRAINT ponto_interesse FOREIGN KEY(ponto_interesse_id) REFERENCES ponto_interesse(id),
	CONSTRAINT visitante FOREIGN KEY(visitante_id) REFERENCES utilizador(id),
);

CREATE SEQUENCE evento_id_seq;
CREATE TABLE evento (
	id					PRIMARY KEY DEFAULT nextval('evento_id_seq'),
	nome				VARCHAR(255) NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	pontos		  		INTEGER NOT NULL,
	lotacao				INTEGER NOT NULL DEFAULT 0,
	codigo_uuid			UUID,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	tipo_evento_id		INTEGER NOT NULL,

	CONSTRAINT ponto_interesse FOREIGN KEY(ponto_interesse_id) REFERENCES ponto_interesse(id),
	CONSTRAINT tipo FOREIGN KEY(tipo_evento_id) REFERENCES tipo_evento(id),
);

CREATE SEQUENCE scan_evento_id_seq;
CREATE TABLE scan_evento (
	id 					PRIMARY KEY DEFAULT nextval('scan_evento_id_seq'),
	pontos_recebidos	INTEGER NOT NULL,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	evento_id	 		INTEGER NOT NULL,
	visitante_id 		INTEGER NOT NULL,

	CONSTRAINT evento FOREIGN KEY(evento_id) REFERENCES evento(id),
	CONSTRAINT visitante FOREIGN KEY(visitante_id) REFERENCES utilizador(id),
);

CREATE SEQUENCE sessao_id_seq;
CREATE TABLE sessao (
	id				PRIMARY KEY DEFAULT nextval('sessao_id_seq'),
	data_hora	 	TIMESTAMP NOT NULL,
	inicio_evento	BOOLEAN,
	fim_evento	 	BOOLEAN,
	vagas			INTEGER NOT NULL DEFAULT 0,
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
	evento_id 		INTEGER NOT NULL,

	CONSTRAINT evento FOREIGN KEY(evento_id) REFERENCES evento(id),
);

CREATE SEQUENCE reserva_id_seq;
CREATE TABLE reserva (
	id					PRIMARY KEY DEFAULT nextval('reserva_id_seq'),
	nome				VARCHAR(255) NOT NULL,
	pessoas				INTEGER NOT NULL,
	validado			BOOLEAN NOT NULL DEFAULT FALSE,
	codigo_confirmacao	VARCHAR(5),
	confirmado			BOOLEAN NOT NULL DEFAULT FALSE,
	observacoes			VARCHAR(255),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	sessao_id			INTEGER NOT NULL,
	visitante_id 		INTEGER NOT NULL,

	CONSTRAINT sessao FOREIGN KEY(sessao_id) REFERENCES sessao(id),
	CONSTRAINT visitante FOREIGN KEY(visitante_id) REFERENCES utilizador(id),
);

CREATE SEQUENCE recompensa_id_seq;
CREATE TABLE recompensa (
	id					PRIMARY KEY DEFAULT nextval('recompensa_id_seq'),
	validado			BOOLEAN NOT NULL DEFAULT FALSE,
	titulo				VARCHAR(255) NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	pontos				INTEGER NOT NULL,
	observacoes			VARCHAR(255),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	tipo_interesse_id 	INTEGER NOT NULL,

	CONSTRAINT tipo_interesse FOREIGN KEY(tipo_interesse_id) REFERENCES tipo_interesse(id),
);

CREATE SEQUENCE ponto_interesse_recompensa_id_seq;
CREATE TABLE ponto_interesse_recompensa (
	id 					PRIMARY KEY DEFAULT nextval('ponto_interesse_recompensa_id_seq'),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	recompensa_id		INTEGER NOT NULL,

	CONSTRAINT ponto_interesse FOREIGN KEY(ponto_interesse_id) REFERENCES ponto_interesse(id),
	CONSTRAINT recompensa FOREIGN KEY(recompensa_id) REFERENCES recompensa(id),
);

CREATE SEQUENCE imagem_id_seq;
CREATE TABLE imagem (
	id 					PRIMARY KEY DEFAULT nextval('imagem_id_seq'),
	blob	 			BYTEA,
	url					VARCHAR(255),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,

	CONSTRAINT ponto_interesse FOREIGN KEY(ponto_interesse_id) REFERENCES ponto_interesse(id),
);

CREATE SEQUENCE candidatura_at_id_seq;
CREATE TABLE candidatura_at (
	id					PRIMARY KEY DEFAULT nextval('candidatura_at_id_seq'),
	localidade_at		VARCHAR(50) NOT NULL,
	texto_candidatura	VARCHAR(512) NOT NULL,
	estado				BOOLEAN,
	observacoes		 	VARCHAR(255),
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	distrito_id	 		INTEGER NOT NULL,
	visitante_id 		INTEGER NOT NULL,

	CONSTRAINT distrito FOREIGN KEY(distrito_id) REFERENCES distrito(id),
	CONSTRAINT visitante FOREIGN KEY(visitante_id) REFERENCES utilizador(id),
);

CREATE SEQUENCE comentario_avaliacao_id_seq;
CREATE TABLE comentario_avaliacao (
	id					PRIMARY KEY DEFAULT nextval('comentario_avaliacao_id_seq'),
	comentario 			VARCHAR(255),
	avaliacao 			INTEGER NOT NULL,
	created_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at			TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at			TIMESTAMP DEFAULT NULL,
	visitante_id 		INTEGER NOT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,

	CONSTRAINT visitante FOREIGN KEY(visitante_id) REFERENCES utilizador(id),
	CONSTRAINT ponto_interesse FOREIGN KEY(ponto_interesse_id) REFERENCES ponto_interesse(id),
);

CREATE SEQUENCE voucher_id_seq_id_seq;
CREATE TABLE voucher (
	id				PRIMARY KEY DEFAULT nextval('voucher_id_seq_id_seq'),
	data_compra		DATE NOT NULL,
	data_validade	DATE NOT NULL,
	data_usado		TIMESTAMP,
	pontos_gastos	INTEGER NOT NULL
	created_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at		TIMESTAMP NOT NULL DEFAULT NOW(),
	deleted_at		TIMESTAMP DEFAULT NULL,
	recompensa_id 	INTEGER NOT NULL,
	utilizador_id 	INTEGER NOT NULL,
);
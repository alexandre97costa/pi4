CREATE TABLE candidatura_at (
	candidatura_at_id	SERIAL,
	localidade_at		VARCHAR(50) NOT NULL,
	texto_candidatura	VARCHAR(512) NOT NULL,
	estado				BOOLEAN,
	observacoes		 	VARCHAR(255),
	distrito_id	 		INTEGER NOT NULL,
	utilizador_id 		INTEGER NOT NULL,
	PRIMARY KEY(candidatura_at_id)
);

CREATE TABLE comentario_avaliacao (
	utilizador_id		INTEGER NOT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	comentario 			VARCHAR(255),
	avaliacao 			INTEGER NOT NULL,
	PRIMARY KEY(utilizador_id, ponto_interesse_id)
);

CREATE TABLE distrito (
	distrito_id		SERIAL,
	nome			VARCHAR(255) NOT NULL,
	utilizador_id 	INTEGER NOT NULL,
	PRIMARY KEY(distrito_id)
);

CREATE TABLE evento (
	evento_id			SERIAL,
	num_pontos  		INTEGER NOT NULL,
	nome				VARCHAR(255) NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	num_vagas			INTEGER NOT NULL DEFAULT 0,
	tipo_evento_id		INTEGER NOT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	PRIMARY KEY(evento_id)
);

CREATE TABLE freguesia (
	freguesia_id	SERIAL,
	nome	VARCHAR(255) NOT NULL,
	municipio_id 	INTEGER NOT NULL,
	PRIMARY KEY(freguesia_id)
);

CREATE TABLE imagem (
	imagem_id 			SERIAL,
	img	 				BYTEA NOT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	PRIMARY KEY(imagem_id)
);

CREATE TABLE municipio (
	municipio_id	SERIAL,
	nome			VARCHAR(255) NOT NULL,
	distrito_id 	INTEGER NOT NULL,
	PRIMARY KEY(municipio_id)
);

CREATE TABLE ponto_interesse (
	ponto_interesse_id	INTEGER,
	nome				VARCHAR(255) NOT NULL,
	morada				VARCHAR(255) NOT NULL,
	codigo_postal		VARCHAR(8) NOT NULL,
	num_telemovel		VARCHAR(50) NOT NULL,
	num_pontos			INTEGER NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	freguesia_id		INTEGER NOT NULL,
	tipo_interesse_id 	INTEGER NOT NULL,
	agente_turistico_id INTEGER NOT NULL,
	PRIMARY KEY(ponto_interesse_id)
);

CREATE TABLE ponto_interesse_recompensa (
	ponto_interesse_id 	INTEGER NOT NULL,
	recompensa_id		INTEGER NOT NULL,
	PRIMARY KEY(ponto_interesse_id,recompensa_id)
);

CREATE TABLE pontos_evento (
	evento_id	 	INTEGER NOT NULL,
	utilizador_id 	INTEGER NOT NULL,
	PRIMARY KEY(evento_id,utilizador_id)
);

CREATE TABLE pontos_ponto_interesse (
	utilizador_id		INTEGER NOT NULL,
	ponto_interesse_id 	INTEGER NOT NULL,
	PRIMARY KEY(utilizador_id,ponto_interesse_id)
);

CREATE TABLE recompensa (
	recompensa_id		SERIAL,
	active				BOOLEAN NOT NULL,
	titulo				VARCHAR(255) NOT NULL,
	descricao			VARCHAR(255) NOT NULL,
	tipo_interesse_id 	INTEGER NOT NULL,
	PRIMARY KEY(recompensa_id)
);

CREATE TABLE reserva (
	reserva_id		SERIAL,
	nome			VARCHAR(255),
	num_pessoas		INTEGER NOT NULL,
	validado		BOOLEAN NOT NULL,
	confirmado		BOOLEAN NOT NULL,
	observacoes		VARCHAR(255),
	sessao_id		INTEGER NOT NULL,
	utilizador_id 	INTEGER NOT NULL,
	evento_id	 	INTEGER NOT NULL,
	PRIMARY KEY(reserva_id)
);

CREATE TABLE sessao (
	sessao_id	SERIAL,
	data_hora	 	TIMESTAMP NOT NULL,
	inicio_evento	BOOLEAN,
	fim_evento	 	BOOLEAN,
	evento_id 		INTEGER NOT NULL,
	PRIMARY KEY(sessao_id)
);

CREATE TABLE tipo_evento (
	tipo_evento_id	 SERIAL,
	nome			 VARCHAR(255),
	observacoes		 VARCHAR(255),
	PRIMARY KEY(tipo_evento_id)
);

CREATE TABLE tipo_interesse (
	tipo_interesse_id 	SERIAL,
	nome			 	VARCHAR(255) NOT NULL,
	observacoes	 		VARCHAR(255),
	PRIMARY KEY(tipo_interesse_id)
);

CREATE TABLE tipo_utilizador (
	tipo_utilizador_id	 	SERIAL,
	nome				 	VARCHAR(255) NOT NULL,
	observacoes		 		VARCHAR(255),
	PRIMARY KEY(tipo_utilizador_id)
);

CREATE TABLE utilizador (
	utilizador_id		SERIAL,
	nome				VARCHAR(255) NOT NULL,
	email				VARCHAR(100) NOT NULL,
	password			VARCHAR(512) NOT NULL,
	data_nascimento		DATE NOT NULL,
	tipo_utilizador_id 	INTEGER NOT NULL,
	PRIMARY KEY(utilizador_id)
);

CREATE TABLE voucher (
	voucher_id		SERIAL,
	data_compra		DATE NOT NULL,
	data_validade	DATE NOT NULL,
	data_usado		TIMESTAMP,
	usado			BOOLEAN NOT NULL,
	recompensa_id 	INTEGER NOT NULL,
	utilizador_id 	INTEGER NOT NULL,
	PRIMARY KEY(voucher_id)
);

ALTER TABLE reserva						ADD CONSTRAINT reserva_fk_data_hora 					FOREIGN KEY (sessao_id)				REFERENCES sessao(sessao_id);
ALTER TABLE reserva						ADD CONSTRAINT reserva_fk_utilizador 					FOREIGN KEY (utilizador_id)			REFERENCES utilizador(utilizador_id);
ALTER TABLE evento						ADD CONSTRAINT evento_fk_tipo 							FOREIGN KEY (tipo_evento_id)		REFERENCES tipo_evento(tipo_evento_id);
ALTER TABLE evento						ADD CONSTRAINT evento_fk_pi 							FOREIGN KEY (ponto_interesse_id)	REFERENCES ponto_interesse(ponto_interesse_id);
ALTER TABLE utilizador					ADD CONSTRAINT utilizador_fk_tipo 						FOREIGN KEY (tipo_utilizador_id)	REFERENCES tipo_utilizador(tipo_utilizador_id);
ALTER TABLE candidatura_at				ADD CONSTRAINT candidatura_at_fk_utilizador 			FOREIGN KEY (utilizador_id)			REFERENCES utilizador(utilizador_id);
ALTER TABLE candidatura_at				ADD CONSTRAINT candidatura_at_fk_distrito 				FOREIGN KEY (distrito_id)		 	REFERENCES distrito(distrito_id);
ALTER TABLE voucher						ADD CONSTRAINT voucher_fk_utilizador 					FOREIGN KEY (utilizador_id)			REFERENCES utilizador(utilizador_id);
ALTER TABLE voucher						ADD CONSTRAINT voucher_fk_recompensa 					FOREIGN KEY (recompensa_id)			REFERENCES recompensa(recompensa_id);
ALTER TABLE ponto_interesse				ADD CONSTRAINT agente_turistico 						FOREIGN KEY (agente_turistico_id) 	REFERENCES utilizador(utilizador_id);
ALTER TABLE ponto_interesse				ADD CONSTRAINT ponto_interesse_fk_freguesia 			FOREIGN KEY (freguesia_id) 			REFERENCES freguesia(freguesia_id);
ALTER TABLE ponto_interesse				ADD CONSTRAINT ponto_interesse_fk_tipo 					FOREIGN KEY (tipo_interesse_id)		REFERENCES tipo_interesse(tipo_interesse_id);
ALTER TABLE recompensa					ADD CONSTRAINT recompensa_fk_tipo 						FOREIGN KEY (tipo_interesse_id)		REFERENCES tipo_interesse(tipo_interesse_id);
ALTER TABLE freguesia					ADD CONSTRAINT freguesia_fk_municipio 					FOREIGN KEY (municipio_id) 			REFERENCES municipio(municipio_id);
ALTER TABLE municipio					ADD CONSTRAINT municipio_fk_distrito 					FOREIGN KEY (distrito_id) 			REFERENCES distrito(distrito_id);
ALTER TABLE distrito					ADD CONSTRAINT responsavel_regiao 						FOREIGN KEY (utilizador_id) 		REFERENCES utilizador(utilizador_id);
ALTER TABLE sessao						ADD CONSTRAINT sessao_fk_evento 						FOREIGN KEY (evento_id) 			REFERENCES evento(evento_id);
ALTER TABLE imagem						ADD CONSTRAINT imagem_fk_pi 							FOREIGN KEY (ponto_interesse_id) 	REFERENCES ponto_interesse(ponto_interesse_id);
ALTER TABLE pontos_ponto_interesse		ADD CONSTRAINT pontos_pi_fk_utilizador 					FOREIGN KEY (utilizador_id) 		REFERENCES utilizador(utilizador_id);
ALTER TABLE pontos_ponto_interesse		ADD CONSTRAINT pontos_pi_fk_pi 							FOREIGN KEY (ponto_interesse_id) 	REFERENCES ponto_interesse(ponto_interesse_id);
ALTER TABLE comentario_avaliacao		ADD CONSTRAINT comentario_avaliacao_fk_utilizador 		FOREIGN KEY (utilizador_id) 		REFERENCES utilizador(utilizador_id);
ALTER TABLE comentario_avaliacao		ADD CONSTRAINT comentario_avaliacao_fk_pi 				FOREIGN KEY (ponto_interesse_id) 	REFERENCES ponto_interesse(ponto_interesse_id);
ALTER TABLE ponto_interesse_recompensa	ADD CONSTRAINT ponto_interesse_recompensa_fk_pi 		FOREIGN KEY (ponto_interesse_id) 	REFERENCES ponto_interesse(ponto_interesse_id);
ALTER TABLE ponto_interesse_recompensa	ADD CONSTRAINT ponto_interesse_recompensa_fk_recompensa FOREIGN KEY (recompensa_id) 		REFERENCES recompensa(recompensa_id);
ALTER TABLE pontos_evento				ADD CONSTRAINT pontos_evento_fk_utilizador 				FOREIGN KEY (utilizador_id) 		REFERENCES utilizador(utilizador_id);
ALTER TABLE pontos_evento				ADD CONSTRAINT pontos_evento_fk_evento 					FOREIGN KEY (evento_id) 			REFERENCES evento(evento_id);
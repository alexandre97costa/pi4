-- todo: tipo de evento, 

insert into tipo_utilizador(id, nome, observacoes, created_at, updated_at, deleted_at) values 
( 1, 'Visitante',               'O tipo de utilizador que utiliza a app mobile.', current_timestamp, current_timestamp, null ),
( 2, 'Agente Turístico',        'Gestor de pontos de interesse, capaz de criar pontos, eventos e recompensas.', current_timestamp, current_timestamp, null ),
( 3, 'Responsável de Região',   'Gestor de um distrito inteiro, responsável por validar pontos e recompensas.', current_timestamp, current_timestamp, null ),
( 4, 'Administrador',           'Administrador do sistema, acesso total.', current_timestamp, current_timestamp, null );

/* 
Este user só serve para definir o responsavel dos distritos, e o agente 
do ponto de interesse ficticio. Depois da inserção de dados, deve ser 
substituido por um utilizador real nesses mesmos distritos e ponto de 
interesse.
*/
insert into utilizador(id, nome, email, password, data_nascimento, created_at, updated_at, deleted_at, tipo_utilizador_id) values
(1, 'Francisco Fictício', 'franfic@email.com', 'password', '2000-01-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);

insert into tipo_interesse(id, nome, observacoes, created_at, updated_at, deleted_at) values
(1, 'Paisagem', 	'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(2, 'Museu', 		'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(3, 'Religião', 	'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(4, 'Bar/Discoteca','Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(5, 'Desporto', 	'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(6, 'Comércio', 	'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(7, 'Natureza', 	'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(8, 'Restauração',  'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null),
(9, 'Praia', 		'Nenhuma observação', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null);

insert into distrito(id, nome, created_at, updated_at, deleted_at, responsavel_regiao_id) values
(1, 'Viseu', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);

insert into municipio(id, nome, created_at, updated_at, deleted_at, distrito_id) values
( 1, 'Armamar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 2, 'Carregal do Sal', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 3, 'Castro Daire', 			CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 4, 'Cinfães', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 5, 'Lamego', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 6, 'Mangualde', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 7, 'Moimenta da Beira', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 8, 'Mortágua', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 9, 'Nelas', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(10, 'Oliveira de Frades', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(11, 'Penalva do Castelo', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(12, 'Penedono', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(13, 'Resende', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(14, 'Santa Comba Dão', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(15, 'São João da Pesqueira',	CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(16, 'São Pedro do Sul', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(17, 'Sátão', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(18, 'Sernancelhe', 			CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(19, 'Tabuaço', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(20, 'Tarouca', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(21, 'Tondela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(22, 'Vila Nova de Paiva', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(23, 'Viseu', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(24, 'Vouzela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);

insert into freguesia(id, nome, created_at, updated_at, deleted_at, municipio_id) values
( 1, 'Abraveses',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 2, 'Barreiros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 3, 'Cepões',              CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 4, 'Boa Aldeia',          CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 5, 'Farminhão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 6, 'Torredeita',          CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 7, 'Bodiosa',             CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 8, 'Calde',               CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
( 9, 'Campo',               CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(10, 'Cavernães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(11, 'Cota',                CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(12, 'Coutos de Viseu',     CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(13, 'Fail',                CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(14, 'Vila Chã de Sá',      CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(15, 'Fragosela',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(16, 'Lordosa',             CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(17, 'Mundão',              CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(18, 'Orgens',              CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(19, 'Povolide',            CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(20, 'Ranhados',            CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(21, 'Repeses',             CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(22, 'São Salvador',        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(23, 'Ribafeita',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(24, 'Rio de Loba',         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(25, 'Santos Evos',         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(26, 'São Cipriano',        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(27, 'Vil de Souto',        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(28, 'São João de Lourosa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(29, 'São Pedro de France', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23),
(30, 'Silgueiros',          CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 23);

-- pontos de interesse ficticios
insert into ponto_interesse(id, nome, morada, codigo_postal, num_telemovel, num_pontos, descricao, validado, created_at, updated_at, deleted_at, freguesia_id, agente_turistico_id, tipo_interesse_id) values
(1, 'Jardim das Mães',      'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 1, 1, 1),
(2, 'Jardim dos Pais',      'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 2, 1, 2),
(3, 'Jardim das Primas',    'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 3, 1, 3),
(4, 'Jardim dos Tios',      'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 4, 1, 4),
(5, 'Jardim dos Avós',      'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 5, 1, 5),
(6, 'Jardim das Cunhadas',  'Uma morada já com alguns carateres, prai cinquenta', '1566-895', 123456789, 10, 'Uma descrição', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 6, 1, 6);
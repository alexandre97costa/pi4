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
(2, 'Tiago Almeida', 'ttiago17@hotmail.com', '1234', '2000-11-14', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(3, 'João Silva', 'joaosil@hotmail.com', 'joaosilva1', '2000-11-20', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(4, 'Rita Pinho', 'ritapinho@gmail.com', 'htyu123', '2000-05-02', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(5, 'Pedro Almeida', 'pedrinhomc@gmail.com', 'pedrinpequeninin', '2000-10-04', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(6, 'Leandro Teixeira', 'leandrin@gmail.com', 'leadrinfinin', '1998-09-10', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(7, 'Guilherme Novo', 'guinovo@gmail.com', 'velho12445', '2002-06-04', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(8, 'Pedro Almeida', 'pedroalmeida23@gmail.com', 'pedroalmeidaemaisvinteetres', '2000-10-04', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(9, 'Filipa Brandão', 'filipaturistando@hotmail.com', 'lipinhavaiaopasseio', '2000-02-28', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(10, 'Rodrigo Cunha', 'cunharodri@gmail.com', 'rodrigova3412', '1988-08-12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(11, 'Joaquim Almeida', 'jqa123@gmail.com', 'quimtxiperguntou', '1970-12-21', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(12, 'Miguel Valente', 'miguelespeles@gmail.com', 'valenteemcasa', '2000-10-04', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(13, 'Tiago Joaquim', 'tiglatelegrandxin@gmail.com', 'grandixnteu', '2000-11-18', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(14, 'Tânia Mota', 'brumbrummota@gmail.com', '125cma1000', '2005-07-15', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(15, 'Beatriz Cruz', 'cruznabeatriz@gmail.com', 'biazinhaseperdeunacozinha', '1990-04-06', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(16, 'Manuela Vidigal', 'nelinha@hotmail.com', 'nelinhavaiaescola', '1989-10-04', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(17, 'Mariana Castanheira', 'marianacastanha@gmail.com', 'assadinhacomsal', '1978-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(18, 'Raquel Almeida', 'raquelinmeidin@gmail.com', 'mcraquelnacasa', '1996-08-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(19, 'Rui Pedro', 'ruidospcs@gmail.com', 'dospcseusou', '2001-10-16', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(20, 'Joana Pestana', 'pestaninha@hotmail.com', 'bonssonhos', '2004-10-12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);

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
(1, 'Aveiro', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(2, 'Beja', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(3, 'Braga', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(4, 'Bragança', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(5, 'Castelo Branco', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(6, 'Coimbra', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(7, 'Évora', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(8, 'Faro', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(9, 'Guarda', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(10, 'Leiria', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(11, 'Lisboa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(12, 'Portalegre', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(13, 'Porto', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(14, 'Santarém', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(15, 'Setúbal', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(16, 'Viana do Castelo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(17, 'Vila Real', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);
(18, 'Viseu', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1);

insert into municipio(id, nome, created_at, updated_at, deleted_at, distrito_id) values
( 1, 'Agueda', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 2, 'Albergaria-a-velha', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 3, 'Anadia', 			CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 4, 'Arouca', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 5, 'Aveiro', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 6, 'Castelo de Paiva', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 7, 'Espinho', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 8, 'Estarreja', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 9, 'Santa Maria da Feira', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(10, 'Ilhavo', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(11, 'Mealhada', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(12, 'Murtosa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(13, 'Oliveira de Azemeis', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(14, 'Ovar', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(15, 'São João da Madeira',	CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(16, 'Sever do Vouga', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(17, 'Vagos', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(18, 'Vale de Cambra', 			CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
(19, 'Aljustrel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
(20, 'Almodovar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
(21, 'Alvito', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
(22, 'Barrancos', 		CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
(23, 'Beja', 					CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
(24, 'Castro Verde', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(25, 'Cuba', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(26, 'Ferreira do Alentejo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(27, 'Mertola', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(28, 'Moura', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(29, 'Odemira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(30, 'Ourique', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(31, 'Vidigueira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2);
(32, 'Amares', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(33, 'Barcelos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(34, 'Braga', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(35, 'Cabeceiras de Basto', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(36, 'Celorico de Basto', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(37, 'Esposende', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(38, 'Fafe', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(39, 'Guimarães', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(40, 'Povoa de Lanhoso', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(41, 'Terras de Bouro', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(42, 'Vieira do Minho', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(43, 'Vila Nova de Famalicão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(44, 'Vila Verda', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(45, 'Vizela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3);
(46, 'Alfandega da Fé', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(47, 'Bragança', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(48, 'Carrazeda de Ansiães', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(49, 'Freixo de Espada a Cinta', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(50, 'Macedo de Cavaleiros', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(51, 'Miranda do Douro', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(52, 'Mirandela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(53, 'Mogadouro', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(54, 'Torre de Moncordo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(55, 'Vila Flor', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(56, 'Vimioso', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(57, 'Vinhais', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4);
(58, 'Belmonte', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(59, 'Castelo Branco', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(60, 'Covilhã', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(61, 'Fundão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(62, 'Idanha-a-Nova', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(63, 'Oleiros', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(64, 'Penamacor', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(65, 'Proença-a-Nova', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(66, 'Sertã', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(67, 'Vila de Rei', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(68, 'Vila Velha de Rodão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5);
(69, 'Arganil', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(70, 'Cantanhede', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(71, 'Coimbra', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(72, 'Condeixa-a-Nova', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(73, 'Figueira da Foz', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(74, 'Gois', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(75, 'Lousã', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(76, 'Mira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(77, 'Miranda do corvo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(78, 'Montemor-o-velho', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(79, 'Oliveira do Hospital', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(80, 'Pampilhosa da Serra ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(81, 'Oliveira do Hospital', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(82, 'Pampilhosa da Serra', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(83, 'Penacova', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(84, 'Penela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(85, 'Soure', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(86, 'Tabua', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(87, 'Vila Nova de Poiares', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6);
(88, 'Alandroal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(89, 'Arraiolos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(90, 'Borba', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(91, 'Estremoz', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(92, 'Evora', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(93, 'Montemor-o-Novo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(94, 'Mora', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(95, 'Mourão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(96, 'Portel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(97, 'Redondo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(98, 'Reguengos de Monsaraz', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(99, 'Vendas Novas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(100, 'Viana do Alentejo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(101, 'Vila Viçosa ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7);
(102, 'Albufeira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(103, 'Alcoutim', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(104, 'Aljezur', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(105, 'Castro Marim', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(106, 'Faro', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(107, 'Lagoa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(108, 'Lagos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(109, 'Loule', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(110, 'Monchique', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(111, 'Olhão ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(112, 'Portimão ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(113, 'São Brás de Alportel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(114, 'Silves', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(115, 'Tavira ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(116, 'Vila do Bispo ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(117, 'Vila Real de Santo António ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8);
(118, 'Aguiar da Beira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(119, 'Almeida ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(120, 'Celorica da Beira ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(121, 'Figueira de Castelo Rodrigo ', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(122, 'Fornos de Algodres', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(123, 'Gouveia', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(124, 'Guarda', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(125, 'Manteigas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(126, 'Meda', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(127, 'Pinhel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(128, 'Sabugal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(129, 'Seia', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(130, 'Trancoso', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(131, 'Vila Nova de Foz Coa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9);
(132, 'Alcobaça', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(133, 'Alvaiazere', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(134, 'Ansião', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(135, 'Batalha', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(136, 'Bombarral', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(137, 'Caldas da Rainha', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(138, 'Castanheira de Pera', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(139, 'Figueiró dos Vinhos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(140, 'Leiria', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(141, 'Marinha Grande', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(142, 'Nazaré', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(143, 'Obidos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(144, 'Pedrogão Grande', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(145, 'Peniche', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(146, 'Pombal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(147, 'Porto de Mós', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10);
(148, 'Alenquer', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(149, 'Arruda dos Vinhos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(150, 'Azambuja', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(151, 'Cadaval', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(152, 'Cascais', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(153, 'Lisboa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(154, 'Loures', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(155, 'Lourinhã', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(156, 'Mafra', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(157, 'Oeiras', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(158, 'Sintra', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(159, 'Sobral de Monte Agraço', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(160, 'Torres Vedras', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(161, 'Vila Franca de Xira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(162, 'Amadora', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(163, 'Odivelas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11);
(164, 'Alter do Chão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(165, 'Arronches', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(166, 'Avis', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(167, 'Campo Maior', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(168, 'Castelo de Vide', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(169, 'Crato', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(170, 'Elvas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(171, 'Fronteira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(172, 'Gavião', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(173, 'Marvão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(174, 'Monforte', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(175, 'Nisa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(176, 'Ponte de Sor', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(177, 'Portalegre', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(178, 'Sousel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12);
(179, 'Amarante', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(180, 'Baião', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(181, 'Felgueiras', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(182, 'Gondomar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(183, 'Lousada', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(184, 'Maia', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(185, 'Marco de Canaveses', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(186, 'Matosinhos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(187, 'Paços de Ferreira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(188, 'Paredes', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(189, 'Penafiel', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(190, 'Porto', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(191, 'Povoa de Varzim', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(192, 'Santo Tirso', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(193, 'Valongo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(194, 'Vila do Conde', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(195, 'Vila Nova de Gaia', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(196, 'Trofa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(197, 'Abrantes', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13);
(198, 'Alcanena', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(199, 'Almeirim', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(200, 'Alpiarça', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(201, 'Benavente', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(202, 'Cartaxo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(203, 'Chamusca', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(204, 'Constancia', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(205, 'Coruche', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(206, 'Entroncamento', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(207, 'Ferreira de Zezere', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(208, 'Golegã', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(209, 'Mação', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(210, 'Rio Maior', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(211, 'Salvaterra de Magos', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(212, 'Santarem', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(213, 'Sardoal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(214, 'Tomar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(215, 'Torres Novas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(216, 'Vila Nova da Barquinha', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(217, 'Ourém', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14);
(218, 'Alcacer do Sal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(219, 'Alcochete', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(220, 'Almada', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(221, 'Barreiro', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(222, 'Grandola', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(223, 'Moita', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(224, 'Montijo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(225, 'Palmela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(226, 'Santiago do Cacem', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(227, 'Seixal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(228, 'Sesimbra', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(229, 'Setubal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(230, 'Sines', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 15);
(231, 'Alcos de Valdevez', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(232, 'Caminha', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(233, 'Melgaço', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(234, 'Monção', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(235, 'Paredes de Coura', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(236, 'Ponte da Barca', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(237, 'Ponte de Lima', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(238, 'Valença', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(239, 'Viana do Castelo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(240, 'Vila Nova de Cerveira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 16);
(241, 'Alijo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(242, 'Boticas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(243, 'Chaves', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(244, 'Mesão Frio', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(245, 'Mondim de Basto', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(246, 'Montealegre', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(247, 'Murça', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(248, 'Peso da Régua', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(249, 'Ribeira de Pena', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(250, 'Sabrosa', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(251, 'Santa Marta de Penaguião', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(252, 'Valpaços', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(253, 'Vila Pouca de Aguiar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(254, 'Vila Real', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 17);
(255, 'Armamar', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(256, 'Carregal do Sal', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(257, 'Castro Daire', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(258, 'Cinfães', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(259, 'Lamego', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(260, 'Mangualde', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(261, 'Moimenta da Beira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(262, 'Mortagua', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(263, 'Nelas', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(264, 'Oliveira de Frades', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(265, 'Penalva do Castelo', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(266, 'Penedono', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(267, 'Resende', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(268, 'Santa Comba Dão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(269, 'São João da Pesqueira', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(270, 'São Pedro do Sul', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(271, 'Satão', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(272, 'Sernancelhe', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(273, 'Tabuaço', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(274, 'Tarouca', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(275, 'Tondela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(276, 'Vila Nova de Paiva', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(277, 'Viseu', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);
(278, 'Vouzela', 				CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 18);

insert into freguesia(id, nome, created_at, updated_at, deleted_at, municipio_id) values
( 1, 'Agadão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 2, 'Aguada de Baixo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 3, 'Aguada de Cima',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 4, 'Agueda',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 5, 'Barro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 6, 'Belazaima do Chão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 7, 'Castanheira do Vouga',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 8, 'Espinhel',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 9, 'Fermentelos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 10, 'Lamas do Vouga',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 11, 'Macieira de Alcoba',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 12, 'Macinhata do Vouga',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 13, 'Ois da Ribeira',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 14, 'Prestimo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 15, 'Recardães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 16, 'Segadães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 17, 'Travasso',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 18, 'Trofa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 19, 'Valongo do Vouga',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),
( 20, 'Borralha',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1),

( 21, 'Albergria-a-Velha',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 22, 'Alquerubim',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 23, 'Agenja',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 24, 'Branca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 25, 'Frossos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 26, 'Ribeira de Fraguas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 27, 'S. João de Loure',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),
( 28, 'Valmaior',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 2),

( 29, 'Amoreira da Gandara',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 30, 'Ancas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 31, 'Arcos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 32, 'Avelãs de Caminho',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 33, 'Avelãs de Cima',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 34, 'Mogofores',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 35, 'Moita',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 36, 'Ois do Bairro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 37, 'Sangalhos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 38, 'S. Lourenço do Bairro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 39, 'Tamengos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 40, 'Vila Nova de Monsarros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 41, 'Vilarinho do Bairro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),
( 42, 'Aguim',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 3),

( 43, 'Albergaria da Serra',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 44, 'Alvarenga',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 45, 'Arouca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 46, 'Burgo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 47, 'Cabreiros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 48, 'Canelas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 49, 'Chave',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 50, 'Covelo de Paivo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 51, 'Escariz',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 52, 'Espiunca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 53, 'Fermedo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 54, 'Janarde',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 55, 'Mansores',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 56, 'Moldes',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 57, 'Rossas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 58, 'Santa Eulalia',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 59, 'S. Miguel do Mato',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 60, 'Tropeço',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 61, 'Urro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),
( 62, 'Varzea',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 4),

( 63, 'Aradas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 64, 'Cacia',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 65, 'Eirol',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 66, 'Eixo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 67, 'Esgueira',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 68, 'Gloria',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 69, 'Nariz',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 70, 'Oliveirinha',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 71, 'Requeixo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 72, 'S. Bernardo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 73, 'S. Jacinto',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 74, 'Vera Cruz',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 75, 'Santa Joana',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),
( 76, 'Nossa Senhora de Fátima',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 5),

( 77, 'Bairros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 78, 'Fornos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 79, 'Paraiso',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 80, 'Pedorido',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 81, 'Raiva',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 82, 'Real',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 83, 'Santa Maria de Sardoura',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 84, 'S. Martinho de Sardoura',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),
( 85, 'Sobrado',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 6),

( 86, 'Anta',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7),
( 87, 'Espinho',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7),
( 88, 'Guetim',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7),
( 89, 'Paramos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7),
( 90, 'Silvade',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 7),

( 91, 'Avanca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 92, 'Beduido',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 93, 'Canelas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 94, 'Fermelã',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 95, 'Pardilho',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 96, 'Salreu',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),
( 97, 'Veiros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 8),

( 98, 'Argoncilhe',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 99, 'Arrifana',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 100, 'Canedo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 101, 'Escapães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 102, 'Espargo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 103, 'Feira',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 104, 'Fiães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 105, 'Fornos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 106, 'Gião',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 107, 'Guisande',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 108, 'Lobão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 109, 'Louredo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 110, 'Lourosa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 111, 'Milheiros de Poiares',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 112, 'Mosteiro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 113, 'Mozelos',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 114, 'Nogueira da Regedoura',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 115, 'S. Paio de Oleiros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 116, 'Paços de Brandão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 117, 'Pigeiros',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 118, 'Rio Meão',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 119, 'Romariz',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 120, 'Sanfins',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 121, 'Sanguedo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 122, 'Santa Maria de Lamas',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 123, 'S. João de Ver',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 124, 'Caldas de São Jorge',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 125, 'Souto',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 126, 'Travanca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 127, 'Vale',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),
( 128, 'Vila Maior',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 9),

( 129, 'Gafanha do Carmo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10),
( 130, 'Gafanha da Encarnação',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10),
( 131, 'Gafanha da Nazaré',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10),
( 132, 'Ilhavo (S. Salvador)',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 10),

( 133, 'Antes',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 134, 'Barcouço',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 135, 'Casal Comba',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 136, 'Luso',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 137, 'Mealhada',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 138, 'Pampilhosa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 139, 'Vacariça',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),
( 140, 'Ventosa do Bairro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 11),

( 141, 'Bunheiro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12),
( 142, 'Monte',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12),
( 143, 'Murtosa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12),
( 144, 'Torreira',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 12),

( 145, 'Carregosa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 146, 'Cesar',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 147, 'Fajões',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 148, 'Loureiro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 149, 'Macieira de Sarnes',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 150, 'Macinhata da Seixa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 151, 'Madail',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 152, 'Nogueira do Cravo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 153, 'Oliveira de Azeméis',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 154, 'Ossela',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 155, 'Palmaz',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 156, 'Pindelo',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 157, 'Pinheiro da Bemposta',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 158, 'Santiago de Riba-ul',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 159, 'S. Martinho da Gandara',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 160, 'Travanca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 161, 'Ul',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 162, 'São Roque',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),
( 163, 'Vila de Cucujães',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 13),

( 164, 'Busto',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),
( 165, 'Mamarossa',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),
( 166, 'Oiã',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),
( 167, 'Oliveira do Bairro',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),
( 168, 'Palhaça',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),
( 169, 'Trovisca',           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 14),

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
insert into ponto_interesse(id, nome, morada, codigo_postal, num_telemovel, num_pontos, descricao, validado, created_at, updated_at, deleted_at, freguesia_id, agente_turistico_id, tipo_interesse_id, count_scans, avg_avaliacao) values
(1, 'Jardim das Mães', 'Largo Major Teles n6', '3500-212', 123456789, 10, 'Jardim em homenagem a todas as mães, localizado no centro da cidade com passeios em caminhos de pedra', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 1, 1, 1, 0, 0.00),
(2, 'Sé Catedral de Viseu', 'Adro da Sé', '3500-195', 123456789, 10, 'Também designada por Igreja Paroquial de Santa Maria está classificada como Monumento Nacional desde 1910', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 2, 1, 2, 0, 0.00),
(3, 'Museu Nacional Grão Vasco', 'Adro da Sé', '3500-195', 123456789, 10, 'Localizado no centro histórico de Viseu foi construido no século XVI', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 3, 1, 3, 0, 0.00),
(4, 'Igreja da Misericórdia de Viseu', 'Adro da Sé', '3500-195', 123456789, 10, 'Construída no século XVIII possuio uma fachada rococó localizando-se em frente à Sé de Viseu', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 4, 1, 4, 0, 0.00),
(5, 'Jardim do Fontelo', 'Avenida José Relvas', '3500-043', 123456789, 10, 'Originalmente um parque de recreio de bispos e altos clérigos é hoje um dos locais naturais perfeito para familias e passeios ao ar livre', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 5, 1, 5, 0, 0.00),
(6, 'Estátua de Viriato', 'Avenida da Bélgica n5', '3510-010', 123456789, 10, 'Estátua em bronze com cerca de 2,50 metros representa Viriato em posição heroica em cima de uma pedra rodeada de vários soldados lusitanos', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 6, 1, 6, 0, 0.00);
(7, 'Parque Aquilino Ribeiro', 'Avenida 25 de Abril n25', '3510-118', 123456789, 10, 'Parque público localizado na cidade de Viseu perfeito para uma caminhada', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 6, 1, 6, 0, 0.00);
(8, 'Ecopista do Dão', 'Avenida Europa', '3514-506', 123456789, 10, 'Ciclovia de 49km que percorre a antiga linha de comboio entre Santa Comba Dão e Viseu, é a maior de Portugal', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 6, 1, 6, 0, 0.00);
(9, 'Parque de Santiago', 'Avenida Cidade de Salamanca', '3500-001', 123456789, 10, 'Perfeito para atividades ao ar livre. Possui espaços de lazer, refeição, exercicio e de corrida.', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null , 6, 1, 6, 0, 0.00);
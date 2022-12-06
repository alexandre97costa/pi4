insert into tipo_utilizador(id, nome, observacoes, created_at, updated_at, deleted_at) values 
( 1, 'Visitante',               'O tipo de utilizador que utiliza a app mobile.', current_timestamp, current_timestamp, null ),
( 2, 'Agente Turístico',        'Gestor de pontos de interesse, capaz de criar pontos, eventos e recompensas.', current_timestamp, current_timestamp, null ),
( 3, 'Responsável de Região',   'Gestor de um distrito inteiro, responsável por validar pontos e recompensas.', current_timestamp, current_timestamp, null ),
( 4, 'Administrador',           'Administrador do sistema, acesso total.', current_timestamp, current_timestamp, null );
CREATE TABLE produtos(
    id SERIAL PRIMARY KEY,
   	title VARCHAR(255),
    price FLOAT,
	details VARCHAR(255),
	imageURL VARCHAR(255),
	date_register date 
);

INSERT INTO produtos(title, price, details, imageURL, date_register)
VALUES
    ('JOGO RODAS MERCEDES AMG C180/C200/C250 ARO 19X8,5/9,5 5X112 PRETO BRILHANTE', 7090,'Preto Brilhante Diamantado Aro: 19X8.5 e 9.5 (Duas Talas) Furação: 5X112 ET: 44 / 52 CB: 66.6 CI: 4397 / 4398', 'https://images.tcdn.com.br/img/img_prod/1002931/jogo_rodas_mercedes_amg_c180_c200_c250_aro_19x8_5_9_5_5x112_preto_brilhante_diam_34794629_1_ae90c9e9e6b923b09a6f8ae01c7a0bbd.jpg', '2023-06-07'),
    ('JOGO RODAS MERCEDES AMG C180/C200/C250 ARO 19X8,5/9,5 5X112 PRETO BRILHANTE DIAMANTADO', 7090,'Preto Brilhante Diamantado Aro: 19X8.5 e 9.5 (Duas Talas) Furação: 5X112 ET: 45 / 47 CB: 66.6 CI: 4173 / 459', 'https://images.tcdn.com.br/img/img_prod/1002931/jogo_rodas_mercedes_amg_c180_c200_c250_aro_19x8_5_9_5_5x112_preto_brilhante_diamantado_34794485_1_f9a44a3fc78a07fd189a29ada7d16597.jpg', '2023-06-07'),
    ('JOGO RODAS MS BBS RC ARO 17X8,5 5X100 PRATA BRILHANTE', 5590,'Prata Brilhante Aro: 17X8.5 Furação: 4X100 / 5X100 ET: 20 CB: 67.1 CI: 4358 / VK705', 'https://images.tcdn.com.br/img/img_prod/1002931/jogo_rodas_ms_bbs_rc_aro_17x8_5_5x100_prata_brilhante_34794611_1_9ff4c5c518826026f8ba56cb6241049a.jpg', '2023-06-07');

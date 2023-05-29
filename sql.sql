CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    idade INTEGER,
    uf CHAR(2)
);

INSERT INTO pessoas (nome, idade, uf)
VALUES
    ('John Doe', 25, 'NY'),
    ('Jane Smith', 30, 'CA'),
    ('Michael Johnson', 35, 'TX'),
    ('Emily Davis', 28, 'FL'),
    ('Robert Brown', 32, 'OH'),
    ('Sophia Wilson', 27, 'IL'),
    ('William Anderson', 40, 'PA'),
    ('Olivia Thompson', 22, 'GA'),
    ('James Martinez', 33, 'MI'),
    ('Emma Taylor', 29, 'NC');

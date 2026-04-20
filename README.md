# Repositório de Aulas: Engenharia e Qualidade de Software

Este repositório reúne materiais práticos voltados para o ciclo de vida de desenvolvimento de software, com ênfase em levantamento de requisitos, lógica de programação e garantia de qualidade através de testes unitários.

## Conteúdo do Repositório

O material está dividido em três pilares principais que conectam o planejamento à execução técnica:

### 1. Documentação de Requisitos e Regras de Negócio
Mapeamento detalhado das necessidades do sistema, utilizando cenários reais como sistemas de delivery e gestão de eventos.
* **Requisitos Funcionais (RF):** Descrição das funcionalidades do sistema, como cadastro de usuários, gestão de produtos, realização de pedidos e integração de pagamentos.
* **Requisitos Não Funcionais (RNF):** Definição de critérios de qualidade como desempenho, segurança (criptografia), responsividade e disponibilidade.

### 2. Desenvolvimento de Lógica e Funções Nucleares
Implementação de funções utilitárias que servem de base para as regras de negócio dos sistemas estudados.
* **Operações Matemáticas:** Funções para cálculos fundamentais (soma, subtração, multiplicação e divisão) com tratamento de exceções.
* **Validações e Regras:** Lógica para verificação de maioridade, identificação de números pares e cálculo de descontos progressivos baseados em valor.

### 3. Qualidade e Testes Automatizados
Aplicação de testes para garantir que o código se comporta conforme o esperado e para evitar regressões.
* **Plano de Testes:** Casos de teste estruturados com cenário, entrada e resultado esperado para validar cada requisito funcional e não funcional.
* **Testes Unitários:** Implementação de suítes de testes que verificam automaticamente o sucesso e a falha de cada função desenvolvida, incluindo testes de borda (ex: divisão por zero ou valores limite de desconto).

---

## Metodologia de Aprendizado

A estrutura dos arquivos permite que o estudante siga o fluxo completo de engenharia:
1. Analisar os **Requisitos** de um sistema.
2. Escrever a **Lógica** necessária para atender esses requisitos.
3. Criar **Casos de Teste** conceituais.
4. Implementar a **Automação dos Testes** para validar a entrega.

---

## Tecnologias Utilizadas
* **TypeScript:** Para o desenvolvimento das funções com tipagem estática.
* **Jest:** Framework utilizado para a execução dos testes automatizados.
* **Markdown:** Para a documentação técnica e estruturação de requisitos.

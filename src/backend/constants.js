const CATEGORIAS = ["Discentes", "Docentes", "Técnicos Administrativos", "Campus", "Cursos"];
const FUNCOES = ["Discentes", "Docentes", "Técnicos Administrativos"];

const MAPA_CATEGORIAS_NORMALIZADAS = {
    otimo: "Ótimo",
    bom: "Bom",
    regular: "Regular",
    fraco: "Fraco",
    insuficiente: "Insuficiente",
    indisponivel: "Indisponível",
    "nao sei avaliar": "Não sei avaliar",
};

const ORDEM_CONCEITOS = [
    "Ótimo",
    "Bom",
    "Regular",
    "Fraco",
    "Insuficiente",
    "Indisponível",
    "Não sei avaliar",
];

const CAMPI = ["Aracaju", "Estância", "Glória", "Itabaiana", "Lagarto", "Propriá", "São Cristóvão"];

const PREDIOS = [
    "Aracaju", "Estância", "Glória", "Itabaiana", "Lagarto", "N. Sra. do Socorro",
    "Poço Redondo", "Propriá", "Reitoria", "São Cristóvão", "Tobias Barreto",
];

const CURSOS_POR_CAMPUS = {
    Aracaju: ["Análise e Desenvolvimento de Sistemas", "Engenharia Civil", "Gestão em Turismo", "Matemática", "Química", "Saneamento Ambiental"],
    Estância: ["Engenharia Civil"],
    Glória: ["Tecnologia em Laticínios"],
    Itabaiana: ["Tecnologia em Agroecologia", "Ciência da Computação", "Tecnologia em Logística"],
    Lagarto: ["Arquitetura e Urbanismo", "Engenharia Elétrica", "Física", "Sistemas de Informação"],
    Propriá: ["Gestão de Tecnologia da Informação"],
    "São Cristóvão": ["Licenciatura em Ciências Biológicas", "Tecnologia em Agroecologia", "Tecnologia em Alimentos"],
};

const TODOS_CURSOS = Array.from(new Set(Object.values(CURSOS_POR_CAMPUS).flat()))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

const PERGUNTAS_DISCENTES = [
    "1. Você conhece o Plano de Desenvolvimento Institucional (PDI)?",
    "2. Como você avalia a eficiência da gestão do Campus (direção-geral e administrativa)?",
    "3. Como você avalia a eficiência da Coordenação de Curso?",
    "4. Como você avalia a gestão administrativa do Colegiado do Curso?",
    "5. Como você avalia a gestão acadêmica do Núcleo Docente Estruturante (NDE) do Curso?",
    "6. Como você avalia a eficiência da gestão da direção/gerência de ensino?",
    "7. Você conhece o Projeto Pedagógico do Curso (PPC)?",
    "8. Em que nível as metodologias de ensino-aprendizagem utilizadas atendem às suas necessidades?",
    "9. Como você avalia a atuação do corpo docente, considerando disponibilidade, orientação e feedback?",
    "10. Como você avalia as Políticas de Assistência Estudantil (monitoria, bolsas, apoio psicossocial)?",
    "11. Como você avalia a oferta de atividades de nivelamento, monitoria ou tutoria?",
    "12. Como você avalia o incentivo a projetos de pesquisa e iniciação científica?",
    "13. Como você avalia o incentivo a projetos de extensão?",
    "14. Como você avalia as áreas de vivência e suas acessibilidades (praças, corredores, auditório)?",
    "15. Como você avalia os serviços de apoio (refeitório, limpeza, banheiros)?",
    "16. Como você avalia as condições físicas das salas de aula (mobiliário)?",
    "17. Como você avalia as condições físicas das salas de aula (iluminação)?",
    "18. Como você avalia as condições físicas das salas de aula (acústica)?",
    "19. Como você avalia as condições físicas das salas de aula (climatização)?",
    "20. Como você avalia os equipamentos e recursos de áudio/visual das salas de aula?",
    "21. Como você avalia a acessibilidade arquitetônica das salas de aula?",
    "22. Como você avalia os equipamentos dos laboratórios?",
    "23. Como você avalia os insumos dos laboratórios?",
    "24. Como você avalia a ventilação e conservação dos laboratórios?",
    "25. Como você avalia a acessibilidade arquitetônica dos laboratórios?",
    "26. Como você avalia o acervo físico da biblioteca (livros obrigatórios e complementares)?",
    "27. Como você avalia o acervo digital da biblioteca (bases de dados, periódicos, e-books)?",
    "28. Como você avalia a estrutura física da biblioteca quanto a espaço, conforto, iluminação, climatização, acessibilidade e adequação dos ambientes de estudo (individual e coletivo)?",
    "29. Como você avalia os equipamentos e o mobiliário da biblioteca (mesas, cadeiras, estantes, etc.) É confortável, funcional e acessível para diferentes públicos?",
    "30. Como você avalia os recursos tecnológicos (plataformas, rede, autenticação remota) que garantem o acesso contínuo ao acervo digital da biblioteca pela internet, dentro e fora do campus?",
    "31. Como você avalia o atendimento da biblioteca?",
    "32. Como você avalia a tecnologia e conectividade (internet Wi-Fi e plataformas de ensino)?",
    "33. O sistema de gerenciamento da biblioteca (ex.: Pergamum) é eficiente para busca, reserva, renovação e localização do acervo?",
    "34. Como você avalia a comunicação interna (e-mails, redes sociais, canais institucionais)?",
    "35. Como você avalia a comunicação externa (redes sociais, canais institucionais)?",
    "36. Como você avalia a relação do IFS com a comunidade externa?",
    "37. Como você avalia as políticas de responsabilidade social do IFS?",
    "38. Como você avalia a Comissão Própria de Avaliação (CPA) do IFS?",
];

const PERGUNTAS_DOCENTES = [
    "1. Você conhece e compreende o Plano de Desenvolvimento Institucional (PDI)?",
    "2. Como você avalia a eficiência da gestão do Campus (direção-geral e administrativa)?",
    "3. Como você avalia a eficiência da Coordenação de Curso?",
    "4. Como você avalia a gestão acadêmica do Núcleo Docente Estruturante (NDE) de seu curso?",
    "5. Como você avalia a gestão administrativa do Colegiado do Curso?",
    "6. Como você avalia o Projeto Pedagógico do Curso (PPC)?",
    "7. Como você avalia as políticas de ensino desenvolvidas pelo IFS?",
    "8. Como você avalia as políticas de pesquisa desenvolvidas pelo IFS?",
    "9. Como você avalia as políticas de extensão desenvolvidas pelo IFS?",
    "10. Como você avalia as oportunidades de capacitação, formação continuada e valorização docente?",
    "11. Como você avalia a comunicação interna do IFS (informes, redes, e-mails, portais)?",
    "12. Como você avalia as ações institucionais voltadas para responsabilidade social e ambiental?",
    "13. Como você avalia a integração do IFS com a comunidade externa?",
    "14. Como você avalia as condições físicas das salas de aula (mobiliário, iluminação, climatização e acústica)?",
    "15. Como você avalia os recursos didáticos e tecnológicos disponíveis para as atividades de ensino?",
    "16. Como você avalia os laboratórios de ensino e pesquisa (equipamentos, insumos e acessibilidade)?",
    "17. Como você avalia o acervo físico e digital da biblioteca (livros, e-books, bases de dados)?",
    "18. Como você avalia os espaços de convivência e áreas comuns do Campus (praças, corredores, auditório, segurança)?",
    "19. Você tem conhecimento das ações da CPA e da autoavaliação institucional do IFS?",
    "20. Como você avalia o uso dos resultados da avaliação institucional na melhoria dos cursos?",
    "21. Como você avalia a adequação dos recursos orçamentários e financeiros para o desenvolvimento das atividades de ensino, pesquisa e extensão?",
];

const PERGUNTAS_TECNICOS = [
    "1. Você conhece e compreende o Plano de Desenvolvimento Institucional (PDI) e os objetivos do IFS?",
    "2. Como você avalia a eficiência da gestão da unidade (direção-geral e administrativa)?",
    "3. Como você avalia a comunicação entre os setores e a coordenação do seu setor de trabalho?",
    "4. Como você avalia as oportunidades de capacitação e desenvolvimento profissional oferecidas pelo IFS?",
    "5. Como você avalia as condições de trabalho em relação aos recursos e equipamentos disponíveis?",
    "6. Como você avalia as políticas institucionais voltadas para valorização e qualidade de vida dos servidores?",
    "7. Como você avalia a comunicação interna (circulares, informativos, reuniões, canais institucionais)?",
    "8. Como você avalia a participação do IFS em ações de responsabilidade social e ambiental?",
    "9. Como você avalia a integração do seu setor com a comunidade acadêmica e externa?",
    "10. Como você avalia as condições do ambiente de trabalho (mobiliário, iluminação, ventilação e segurança)?",
    "11. Como você avalia a acessibilidade e manutenção dos espaços físicos de seu local de trabalho?",
    "12. Como você avalia os serviços de apoio (limpeza, refeitório, banheiros, portaria)?",
    "13. Como você avalia os recursos tecnológicos (internet, sistemas administrativos, equipamentos de informática)?",
    "14. Você tem conhecimento das ações da CPA e da autoavaliação institucional do IFS?",
    "15. Como você avalia sua participação nos processos de planejamento e avaliação institucional?",
    "16. Como você avalia a adequação dos recursos humanos e financeiros para funcionamento do seu setor?",
];

module.exports = {
    CATEGORIAS,
    FUNCOES,
    MAPA_CATEGORIAS_NORMALIZADAS,
    ORDEM_CONCEITOS,
    CAMPI,
    PREDIOS,
    CURSOS_POR_CAMPUS,
    TODOS_CURSOS,
    PERGUNTAS_DISCENTES,
    PERGUNTAS_DOCENTES,
    PERGUNTAS_TECNICOS,
};
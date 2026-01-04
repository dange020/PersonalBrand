export const commands = {
    help: {
        description: 'Listar todos los comandos disponibles',
        output: (
            <div className="help-grid">
                <div className="cmd-item"><span>pablo --about</span> - ¿Quién soy?</div>
                <div className="cmd-item"><span>pablo --impact</span> - Hitos profesionales</div>
                <div className="cmd-item"><span>pablo --skills</span> - Habilidades Técnicas y Soft</div>
                <div className="cmd-item"><span>pablo --ai</span> - Inteligencia Artificial</div>
                <div className="cmd-item"><span>pablo --contact</span> - Contacto</div>
                <div className="cmd-item"><span>clear</span> - Limpiar terminal</div>
            </div>
        )
    },
    'pablo --about': {
        description: 'Biografía personal',
        output: (
            <div className="output-section">
                <p>
                    Hola, soy <strong className="highlight">Pablo Carrasco González</strong>.
                </p>
                <p>
                    Project Manager y Responsable de Transformación Digital en un grupo de empresas en Sevilla.
                    Me especializo en coordinar equipos, optimizar procesos operativos e implantar tecnologías (ERPs, automatizaciones) que generan impacto real.
                </p>
                <p>
                    Analizo, ejecuto y mido resultados.
                </p>
            </div>
        )
    },
    'pablo --impact': {
        description: 'Logros clave',
        output: (
            <div className="output-section">
                <div className="impact-item">
                    <strong>➝ Implantación ERP (Pantoja Grupo Logístico)</strong>
                    <p>Coordinación de 5 divisiones (&gt;400 empleados). Estandarización de procesos interdepartamentales.</p>
                </div>
                <div className="impact-item">
                    <strong>➝ Optimización Operativa</strong>
                    <p>Digitalización de flujos de trabajo, reduciendo tiempos de gestión.</p>
                </div>
                <div className="impact-item">
                    <strong>➝ Desarrollo de Cultura Digital</strong>
                    <p>Formación y acompañamiento a usuarios clave para asegurar la adopción tecnológica.</p>
                </div>
            </div>
        )
    },
    'pablo --skills': {
        description: 'Lista de habilidades',
        output: (
            <div className="output-section">
                <div className="skills-category">
                    <strong>[Habilidades Principales]</strong>
                    <span>Capacidad de análisis</span>
                    <span>Gestión del estrés</span>
                    <span>Toma de decisiones</span>
                    <span>Autonomía</span>
                    <span>Resolución de problemas</span>
                </div>
                <br />
                <div className="skills-category">
                    <strong>[Stack Tecnológico]</strong>
                    <span>Python</span>
                    <span>Odoo (Funcional y Dev)</span>
                    <span>APIs</span>
                    <span>VS Code</span>
                    <span>Microsoft Office (Avanzado)</span>
                </div>
            </div>
        )
    },
    'pablo --ai': {
        description: 'IA aplicada a programación, gestión y criterio de uso',
        output: (
            <div className="output-section">
                <div className="skills-category">
                    <strong>[IA aplicada a programación y sistemas]</strong>
                    <span>Apoyo en desarrollo en Python (scripts, automatizaciones, consumo de APIs)</span>
                    <span>Generación y validación de código para Odoo (lógica, modelos, integraciones)</span>
                    <span>Análisis de errores, refactorización y mejora de código existente</span>
                    <span>Documentación técnica clara y mantenible</span>
                </div>

                <div className="terminal-note" style={{ marginTop: '12px' }}>
                    La IA acelera mi trabajo, pero la decisión final y la responsabilidad son siempre humanas.
                </div>

                <br />

                <div className="skills-category">
                    <strong>[IA aplicada a gestión y trabajo diario]</strong>
                    <span>Síntesis de información compleja para toma de decisiones</span>
                    <span>Apoyo en redacción de documentación funcional y técnica</span>
                    <span>Preparación de presentaciones ejecutivas y materiales de formación</span>
                    <span>Análisis de procesos y propuestas de mejora operativa</span>
                    <span>Organización de tareas, priorización y planificación</span>
                </div>

                <br />

                <div className="skills-category">
                    <strong>[Cómo la uso (mi criterio)]</strong>
                    <span>Como copiloto, no como sustituto</span>
                    <span>Para ganar velocidad sin perder control</span>
                    <span>Para reducir fricción, no para añadir complejidad</span>
                    <span>Siempre con revisión y validación propia</span>
                </div>
            </div>
        )
    },
    'pablo --contact': {
        description: 'Información de contacto',
        output: (
            <div className="output-section">
                <p>¿Hablamos?</p>
                <p> Email: <a href="mailto:pablocgz01@gmail.com">pablocgz01@gmail.com</a></p>
                <p> LinkedIn: <a href="https://www.linkedin.com/in/pablo-carrasco-gonzalez" target="_blank" rel="noopener noreferrer">linkedin.com/in/pablo-carrasco-gonzalez</a></p>
            </div>
        )
    }
};

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const spanishDate = new Date().toLocaleDateString('es-ES', dateOptions);

export const welcomeMessage = (
    <div className="welcome-message">
        <p className="highlight">Último acceso: {spanishDate} en ttys001</p>
        <br />
        <p>Sistema Pablo Carrasco [Versión 1.0.0]</p>
        <p>(c) {new Date().getFullYear()} Pablo Carrasco. Todos los derechos reservados.</p>
        <br />
        <p>Escribe <span className="cmd">help</span> para ver los comandos disponibles.</p>
    </div>
);

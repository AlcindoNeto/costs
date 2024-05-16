import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return (
        <section>
            <div>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar seus serviços</p>
                <ProjectForm btnText="Criar Projeto"/>
            </div>
        </section>
    )
}

export default NewProject  
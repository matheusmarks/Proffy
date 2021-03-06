import React,{useState, FormEvent} from 'react';
import PageHeader from '../../Components/PageHeader';
import TeacherItem,{Teacher} from '../../Components/TeacherItem';
import './styles.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select/Input';
import api from '../../services/api';


function TeacherList(){
    const [teachers,setTeachers] = useState([]);
    const [subject,setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time,setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        value={subject}
                        label="Matéria"
                        onChange={(e) => {setSubject(e.target.value)}}
                        options={[
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Matemática II', label: 'Matemática II'},
                            {value: 'Português', label: 'Português'}
                        ]} 
                     />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => {setWeek_day(e.target.value)}}
                        options={[
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'}
                        ]} 
                     />
                   <Input 
                        name="time" 
                        label="Hora" 
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                        type="time"/>
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return  <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
    );
}

export default TeacherList;
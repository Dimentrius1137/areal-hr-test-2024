<template>
    <table ref="table">
        <caption>Организации:{{ tableName }}</caption>
        <thead  class="row" >
            <tr>
                <th>Название</th>
                <th>Комментарий</th>
            </tr>
        </thead>
        <div  v-for="organization of organizationList" :key="organization.id">
            <tr ref="selected" v-if="selectedRow == organization.id" class="selected" @click="SelectRow(organization.id)" >
                <td>{{ organization.id }}</td>
                <td>{{organization.title}}</td>
                <td>{{organization.comment}}</td>
            </tr>
            <tr v-else class="row" @click="SelectRow(organization.id)" >
                <td>{{ organization.id }}</td>
                <td>{{organization.title}}</td>
                <td>{{organization.comment}}</td>
            </tr>
        </div>
 
    </table>
    <label for="orgTitle">Название:</label><br><input id="orgTitle" type="text" v-model="newOgranizatin.title">
    <label for="orgComment"> Комментарий </label><br><input id="orgComment" type="text" v-model="newOgranizatin.comment">
    <div>
        Организация: {{ choosenOrg }}
    </div>
    <button @click="CreateOrg">
        Добавить
    </button>
    <button @click="RemoveOrg(selectedRow)">
        Удалить
    </button>
    <button @click="ChooseOrg">
        Выбрать
    </button>
  
</template>
    import axios from 'axios';
    <script>
import axios from 'axios';

        export default{
            props: ['tableName'],
            data(){
                return{
                    selectedRow: null,
                    choosenOrg: "",
                    organizationList: [],
                    newOgranizatin: {
                        title: "",
                        comment: ""
                    }
                }
            },
            async created(){
                const organizations = await axios.get('http://localhost:3000/api/organization');
                this.organizationList = organizations.data;
                
            },
            methods: {
                SelectRow(id){
                    this.selectedRow = id;
                    console.log(this.selectedRow)
                },
                async ChooseOrg(){
                    const organization = await axios.get(`http://localhost:3000/api/organization/${this.selectedRow}`);
                    this.choosenOrg = organization.data[0].title;
                   
                },
                async CreateOrg(){
                    await axios.post(`http://localhost:3000/api/organization`,
                        JSON.stringify({
                          title: this.newOgranizatin.title,
                          comment: this.newOgranizatin.comment  
                        }),
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    );  
                    this.organizationList.push(this.newOgranizatin);
                },
                async RemoveOrg(id){
                    this.organizationList.forEach((el, idx) => {
                        if(el.id == id){
                            this.organizationList.splice(idx, 1)
                        }
                    })
                    await axios.delete(`http://localhost:3000/api/organization/${id}`);
                }
        }
    }
    </script>
    
    <style scoped lang="scss">
        table{
            height: 300px;
            border-collapse: collapse;
        }
        tr{
            border: 1px solid black;
            display: flex;
            gap: 20px;
        }
        td{
        }
        .selected{
            background-color: aqua;
        }
    </style>
    
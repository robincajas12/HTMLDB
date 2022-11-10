class Dbselect extends HTMLElement
{
    constructor()
    {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        this.divContent = document.createElement('table');
        shadow.appendChild(this.divContent);
    }

    connectedCallback()
    {
        const dbName = this.getAttribute("db-name");
        const src = this.getAttribute("src");
        const columns = this.getAttribute("columns");
        const where = this.getAttribute("where");
        window.sqlite3.db(src, (select)=>
        {
            select(dbName, columns, where, (result)=>{
                result.forEach(data => {
                    const tr = document.createElement('tr');
                    const valores = Object.values(data);
                    valores.forEach(element => {
                        const td = document.createElement('td');
                        td.innerHTML = `${element}`;
                        tr.appendChild(td);
                    });
                    this.divContent.appendChild(tr);
                });
                console.log(result);
            })
        });

    }
}


customElements.define("sql-select", Dbselect);
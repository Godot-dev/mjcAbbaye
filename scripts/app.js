

const vm = Vue.createApp({
    data(){
        return{
            message: "test"
        }
    }
})

vm.component('myheader', {
    props: ['content'],
    template: `
    <header>
    <nav>
        <ul id="menu">
            <li>
                <a href="index.html">Accueil</a>
            </li>
            <li>
                <a href="#">Pour les enfants</a>
                <ul class="sous">
                    <li><a href="#">L'accueil de loisirs</a></li>
                    <li><a href="#"><pre>   - Mercredis</pre></a></li>
                    <li><a href="#"><pre>   - Les vacances</pre></a></li>
                    <li><a href="#"><pre>   - Les séjours</pre></a></li>
                    <li><a href="#">Le périscolaire</a></li>
                    <li><a href="#">L'accompagnement à la scolarité</a></li>
                </ul>
            </li>
            <li>
                <a href="pourJeunes.html">Pour les jeunes</a>
                <ul class="sous">
                    <li><a href="#">Les 11-13 ans</a></li>
                    <li><a href="#">Les 14-17 ans</a></li>
                    <li><a href="#">Les projets</a></li>
                    <li><a href="#">Les séjours</a></li>
                </ul>
            </li>
            <li>
                <a href="pourAdultes.html">Pour les adultes</a>
                <ul class="sous">
                    <li><a href="#">Activités de loisirs</a></li>
                    <li><a href="#"><pre>   - Les ateliers à l'année</pre></a></li>
                    <li><a href="#"><pre>   - Les stages</pre></a></li>
                    <li><a href="#">Les ASL (ateliers socio-linguistiques)</a></li>
                    <li><a href="#"><pre>   - Lien base de données</pre></a></li>
                    <li><a href="#"><pre>   - Livre blanc ASL</pre></a></li>
                    <li><a href="#"><pre>   - Les réalisations</pre></a></li>
                </ul>
            </li>
            <li>
                <a href="sejours.html">Les séjours</a>
                <ul class="sous">
                    <li><a href="#">Vacances d'hiver</a></li>
                    <li><a href="#">Vacances d'été</a></li>
                    <li><a href="#">Vacances d'automne</a></li>
                    <li><a href="#">Vacances de printemps</a></li>
                    <li><a href="#">Le projet enfance jeunesse</a></li>
                    <li><a href="#">Autres périodes</a></li>
                </ul>
            </li>
            <li>
                <a href="#">L'association MJC</a>
                <ul class="sous">
                    <li><a href="#">Les statuts</a></li>
                    <li><a href="#">Le projet associatif</a></li>
                    <li><a href="#">Le conseil d'administration</a></li>
                    <li><a href="#">Organigrame</a></li>
                    <li><a href="#">Le projet enfance jeunesse</a></li>
                    <li><a href="#">Règlement intérieur de la MJC</a></li>
                </ul>
            </li>
            <li>
                <a href="vieDuQuartier.html">La vie du quartier</a>
                <ul class="sous">
                    <li><a href="#">L'urbanisme transitoire : les volets verts</a></li>
                    <li><a href="#">La Maison des Habitants abbaye</a></li>
                    <li><a href="#">Les associations et partenaires du quartier</a></li>
                    <li><a href="#">Les événements</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Documents utiles</a>
                <ul class="sous">
                    <li><a href="#">Fiche adhésion</a></li>
                    <li><a href="#">Fiche sanitaire pour les enfants et jeunes</a></li>
                </ul>
            </li>
            
        </ul>
    </nav>
</header>
    `
})

vm.component('myfooter', {
    props: ['content'],
    template: `
    <footer>
        <div>
            <p><img src="data/img/logo1.png" alt="logoMJC1"></p>
        </div>
        <div>
            <h2>Contact</h2>
            <p>1 place de la commune de 1871,<br>38100 Grenoble</p>
            <p>Nous appeler :<br> 04 76 51 12 51</p>
        </div>
        <div>
            <p><img src="data/img/logo1.png" alt="logoMJC1"></p>
        </div>
        <div>
            <h2>Suivez nous</h2>
            <p><img src="data/img/logo-facebook.png" alt="logo-facebook"></p>
            <p><img src="data/img/logo-instagram.png" alt="logo-instagram"></p>
        </div>
        <div>
            <p><img src="data/img/logo1.png" alt="logoMJC1"></p>
        </div>
    </footer>
    `
})


    
vm.mount('#app');
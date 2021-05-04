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
                <a href="pourEnfants.html">Pour les enfants</a>
                <ul class="sous">
                    <li><a href="pourEnfantsLoisirs.html">L'accueil de loisirs</a></li>
                    <li><a href="#"><pre>   - Mercredis</pre></a></li>
                    <li><a href="#"><pre>   - Les vacances</pre></a></li>
                    <li><a href="sejours.html"><pre>   - Les séjours</pre></a></li>
                    <li><a href="pourEnfants.html#periscolaire">Le périscolaire</a></li>
                    <li><a href="pourEnfants.html#accompagnement-scolarite">L'accompagnement à la scolarité</a></li>
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
                    <li><a href="pourAdultesLoisirs.html">Activités de loisirs</a></li>
                    <li><a href="pourAdultesASL.html">Les ASL (ateliers socio-linguistiques)</a></li>
                    <li><a href="http://asl.mjcabbaye.fr"><pre>   - Lien base de données</pre></a></li>
                    <li><a href="pourAdultesASL.html"><pre>   - Livre blanc ASL</pre></a></li>
                    <li><a href="pourAdultesASL.html"><pre>   - Les réalisations</pre></a></li>
                </ul>
            </li>
            <li>
                <a href="sejours.html">Les séjours</a>
                <ul class="sous">
                    <li><a href="sejours.html#hiver">Vacances d'hiver</a></li>
                    <li><a href="sejours.html#ete">Vacances d'été</a></li>
                    <li><a href="sejours.html#automne">Vacances d'automne</a></li>
                    <li><a href="sejours.html#printemps">Vacances de printemps</a></li>
                    <li><a href="#">Le projet enfance jeunesse</a></li>
                    <li><a href="#">Autres périodes</a></li>
                </ul>
            </li>
            <li>
                <a href="associationMJC.html">L'association MJC</a>
                <ul class="sous">
                    <li><a href="data/docs/statuts.pdf" onclick="window.open(this.href); return false;">Les statuts</a></li>
                    <li><a href="data/docs/projet-associatif.pdf" onclick="window.open(this.href); return false;">Le projet associatif</a></li>
                    <li><a href="#" onclick="window.open(this.href); return false;">Le conseil d'administration</a></li>
                    <li><a href="data/docs/organigramme.pdf" onclick="window.open(this.href); return false;">Organigrame</a></li>
                    <li><a href="#" onclick="window.open(this.href); return false;">Le projet enfance jeunesse</a></li>
                    <li><a href="#" onclick="window.open(this.href); return false;">Règlement intérieur de la MJC</a></li>
                </ul>
            </li>
            <li>
                <a href="vieDuQuartier.html">La vie du quartier</a>
                <ul class="sous">
                    <li><a href="#">L'urbanisme transitoire : les volets verts</a></li>
                    <li><a href="#">La Maison des Habitants abbaye</a></li>
                    <li><a href="data/docs/breve.pdf"><pre>   - Breve en cours</pre></a></li>
                    <li><a href="data/docs/plaquette-mdh.pdf"><pre>   - Plaquette MDH</pre></a></li>
                    <li><a href="#">Les associations et partenaires du quartier</a></li>
                    <li><a href="#">Les événements</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Documents utiles</a>
                <ul class="sous">
                    <li><a href="data/docs/fiche-adhesion.pdf" onclick="window.open(this.href); return false;">Fiche adhésion</a></li>
                    <li><a href="data/docs/fiche-sanitaire.pdf" onclick="window.open(this.href); return false;">Fiche sanitaire pour les enfants et jeunes</a></li>
                    <li><a href="data/docs/plaquette-annuelle.pdf" onclick="window.open(this.href); return false;">Plaquette annuelle</a></li>
                </ul>
            </li>
            
        </ul>
    </nav>
    <hr>
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
            <p>Mail : secretariat@mjc-abbaye.org</p>
        </div>
        <div>
            <h2>Horaires d'ouverture du secrétariat</h2>
            <article>
                <p>HORS VACANCES SCOLAIRES <br> -lundi 15h30-18h <br> -mardi 15h30-18h30 <br> -mercredi 09h30-12h 14h-18h <br> -jeudi 16h-18h30 <br> -vendredi 15h30-18h</p>
                <p>PENDANT LES VACANCES SCOLAIRES <br> -lundi 09h30-12h 13h30-18h <br> -mardi 13h30-18h <br> -mercredi 09h30-12h 14h-18h <br> -jeudi 16h-18h <br> -vendredi 09h30-12h 13h30-17h30</p>
            </article>
        </div>
        <div>
            <h2>Suivez nous</h2>
            <p>
                <a href="https://www.facebook.com/MJCAbbayeGrenoble38"><img src="data/img/logo-facebook.png" alt="logo-facebook"></a>
                <a href="https://www.instagram.com/mjcabbayegrenoble/"><img src="data/img/logo-instagram.png" alt="logo-facebook"></a>
            </p>
            <h2>Ils nous soutiennent :</h2>
            <p>
                <img src="data/img/logos-financeurs.png" alt="logo-financeurs">
            </p>
        </div>
    </footer>
    `
})


    
vm.mount('#app');
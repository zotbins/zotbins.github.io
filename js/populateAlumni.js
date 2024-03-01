/**
 * PLEASE READ THIS ENTIRE COMMENT:
 * 
 * If someone is no longer affiliated with ZotBins, move their data from populateTeamMembers.js to
 * this file. Note that the alumni schema is a bit different than the team member schema, so
 * you will have to change the data.
 * 
 * You can insert alumni anywhere in the ALUMNI array; all of the sorting and ordering is done
 * at the end of this file in the getSortedAlumni function.
 * 
 * Alumni Schema:
 * {
 *     name: string;
 *     headshot?: string;
 *     email?: string;
 *     major: string;
 *     description: string;
 *     linkedin?: string;
 *     graduatingYear?: number;
 *     yearsActive?: number[];
 * }
 */

const ALUMNI = [
    {
        name: 'David Dao',
        headshot: 'img/headshots/david_dao.jpg',
        email: 'davidvd@uci.edu',
        major: 'Computer Science',
        description: 'Web/Mobile Lead',
        linkedin: 'https://www.linkedin.com/in/david-v-dao/',
        graduatingYear: 2024,
        yearsActive: [2021, 2022, 2023],
    },
    {
        name: 'Emil Zublin',
        headshot: 'img/headshots/emil_zublin.jpg',
        email: 'ezublin@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Embedded Systems Lead',
        linkedin: 'https://www.linkedin.com/in/emilzublin/',
        graduatingYear: 2024,
        yearsActive: [2022, 2023],
    },
    {
        name: 'Mark Solomonik',
        headshot: 'img/headshots/mark_solomonik.jpg',
        email: 'misolomo@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/mark-solomonik/',
        graduatingYear: 2025,
        yearsActive: [2021, 2022, 2023],
    },
    {
        name: 'Seongjin Yoon',
        headshot: 'img/headshots/seongjin_yoon.jpg',
        email: 'seongjiy@uci.edu',
        major: 'Computer Science',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/seongjinyoon/',
        graduatingYear: 2024,
        yearsActive: [2023],
    },
    {
        name: 'Yue Wu',
        headshot: 'img/headshots/yue_wu.jpg',
        email: 'wuy57@uci.edu',
        major: 'Computer Science',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/yue-wu-b2bab8225/',
        graduatingYear: 2024,
        yearsActive: [2023],
    },
    {
        name: 'Alexis Chau',
        headshot: 'img/headshots/alexis_chau.jpg',
        email: 'alexishc@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/alexis-chau/',
        graduatingYear: 2024,
        yearsActive: [2022, 2023],
    },
    {
        name: 'James Homer',
        headshot: 'img/headshots/james_homer.jpg',
        email: 'jphomer@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/james-homer-8969791b2/',
        graduatingYear: 2025,
        yearsActive: [2022, 2023],
    },
    {
        name: 'Samuel Briones-Plascencia',
        headshot: 'img/headshots/samuel_briones-plascencia.jpg',
        email: 'sdbrione@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware Lead',
        graduatingYear: 2023,
        yearsActive: [2021, 2022, 2023],
    },
    {
        name: 'Ralph Quiambao',
        email: 'quiambar@uci.edu',
        major: 'Mechanical Engineering ',
        description: 'Hardware',
        linkedin: 'www.linkedin.com/in/quiambar',
        graduatingYear: 2023,
        yearsActive: [2022, 2023],
    },
    {
        name: 'Erin Rhee',
        email: 'ebrhee@uci.edu',
        major: 'Biomedical Engineering',
        description: 'Hardware',
        yearsActive: [2022, 2023],
    },
    {
        name: 'Annika Del Rosario',
        headshot: 'img/headshots/annika_delrosario.jpeg',
        email: 'annikaad@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/annika-del-rosario-134a2b199/',
        yearsActive: [2021, 2022, 2023],
    },
    {
        name: 'Natalie Poist',
        headshot: 'img/headshots/natalie_poist.jpg',
        email: 'npoist@uci.edu',
        major: 'Mechanical Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/natalie-poist/',
        graduatingYear: 2024,
        yearsActive: [2022, 2023],
    },
    {
        name: 'Laura Valko',
        headshot: 'img/headshots/laura_valko.png',
        email: 'lvalko@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'www.linkedin.com/in/lauravalko',
        graduatingYear: 2024,
        yearsActive: [2023],
    },
    {
        name: 'Sakshi Patil',
        headshot: 'img/headshots/SakshiPatil.jfif',
        email: 'sakship@uci.edu',
        major: 'Computer Science',
        description: 'Team Lead',
        linkedin: 'https://www.linkedin.com/in/sakshi-patil19/',
        graduatingYear: 2023,
        yearsActive: [2020, 2021, 2022],
    },
    {
        name: 'Kevin Liu',
        headshot: 'img/headshots/kevin_liu.jpeg',
        email: 'kevil21@uci.edu',
        major: 'Computer Science',
        description: 'API',
        graduatingYear: 2025,
        yearsActive: [2022],
    },
    {
        name: 'Andrea AhSue',
        headshot: 'img/headshots/andrea_ahsue.jpg',
        email: 'aahsue@uci.edu',
        major: 'Computer Engineeering',
        description: 'Embedded Systems Lead',
        linkedin: 'https://www.linkedin.com/in/andrea-ahsue',
        graduatingYear: 2023,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Shalini Bhakta',
        email: 'shalinjb@uci.edu ',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/shalini-bhakta/',
        graduatingYear: 2025,
        yearsActive: [2022],
    },
    {
        name: 'Brandon Vu',
        headshot: 'img/headshots/brandon_vu.jpeg',
        email: 'brandomv@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/brandomv/',
        graduatingYear: 2023,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Akshay Kshipra',
        email: 'akshipra@uci.edu',
        major: 'Computer Science & Engineering',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/akshaykshipra/',
        graduatingYear: 2024,
        yearsActive: [2022],
    },
    {
        name: 'Rohit Srivats',
        headshot: 'img/headshots/rohit.PNG',
        email: 'rsrivat1@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/rohitsrivats/',
        graduatingYear: 2025,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Sarah Nassery',
        email: 'snassery@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/sarah-nassery',
        graduatingYear: 2023,
        yearsActive: [2022],
    },
    {
        name: 'Sagar Patel',
        headshot: 'img/headshots/Sagar_Patel.jpg',
        email: 'sagarbp1@uci.edu',
        major: 'Computer Engineering (Grad)',
        description: 'Embedded Systems Mentor',
        linkedin: 'https://www.linkedin.com/in/sagarp31',
        yearsActive: [2022],
    },
    {
        name: 'Alisa Lu',
        headshot: 'img/headshots/Alisa_Lu.png',
        email: 'alisasl@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/alisasl/',
        graduatingYear: 2025,
        yearsActive: [2022],
    },
    {
        name: 'Padma Iyengar',
        headshot: 'img/headshots/padma_iyengar.jpg',
        email: 'pmiyenga@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/padma-iyengar-2a7aa7188/',
        graduatingYear: 2025,
        yearsActive: [2022],
    },
    {
        name: 'Jacqueline Thai',
        headshot: 'img/headshots/jackie_thai.jpg',
        email: 'jpthai@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        graduatingYear: 2023,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Alexandra Zhang Jiang',
        headshot: 'img/headshots/alexandra_zhang_jiang_headshot.jpg',
        email: 'azhangji@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/alexandra-zhang-jiang-79b97118a/',
        graduatingYear: 2024,
        yearsActive: [2022],
    },
    {
        name: 'Derek Skinner',
        headshot: 'img/headshots/derek_skinner.jpg',
        email: 'dwskinne@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/derek-skinner/',
        graduatingYear: 2023,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Lily Johnson',
        headshot: 'img/headshots/lily_johnson.jpg',
        email: 'lilyaj@uci.edu',
        major: 'Computer Engineering',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/lily-ar-johnson/',
        graduatingYear: 2024,
        yearsActive: [2022],
    },
    {
        name: 'Aishwarya Bhandari',
        headshot: 'img/headshots/aishwarya_bhandari.jpg',
        email: 'aishwab1@uci.edu',
        major: 'Computer Science',
        description: 'Systems Design',
        linkedin: 'https://www.linkedin.com/in/aishwarya-bhandari-3aa763160',
        graduatingYear: 2021,
        yearsActive: [2020, 2021],
    },
    {
        name: 'Alpine Tang',
        headshot: 'img/headshots/alpine_tang.jpg',
        email: 'alpinet@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/alpine-tang-41721a178/',
        graduatingYear: 2022,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Andy Tran',
        headshot: 'img/headshots/andy_tran.jpg',
        email: 'andytt2@uci.edu',
        major: 'Computer Science',
        description: 'Hardware/Electrical & Systems Design',
        linkedin: 'https://www.linkedin.com/in/andytran3/',
        graduatingYear: 2020,
        yearsActive: [2019],
    },
    {
        name: 'Anthony Luu',
        headshot: 'img/headshots/anthony_luu.jpg',
        email: 'luuak@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/anthony-luu/',
        graduatingYear: 2020,
        yearsActive: [2019, 2020],
    },
    {
        name: 'Bhavani Panda',
        headshot: 'img/headshots/bhavani_panda.jpg',
        email: 'sgpanda@uci.edu',
        major: 'Computer Science',
        description: 'Web and Mobile',
        linkedin: 'https://www.linkedin.com/in/bhavanipanda/',
        graduatingYear: 2021,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Ching-Ting Tsai',
        headshot: 'img/headshots/ching_ting_tsai.jpg',
        email: 'chingtit@uci.edu',
        major: 'Computer Science',
        description: 'Systems Design',
        graduatingYear: 2022,
        yearsActive: [2019, 2020],
    },
    {
        name: 'Danny Tran',
        headshot: 'img/headshots/danny_tran.jpg',
        email: 'dannyqt1@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Systems Design',
        linkedin: 'https://www.linkedin.com/in/dannytran98/',
        graduatingYear: 2021,
        yearsActive: [2018, 2019],
    },
    {
        name: 'David Pham',
        headshot: 'img/headshots/david_pham.jpg',
        email: 'daviddp1@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Systems Design',
        graduatingYear: 2020,
        yearsActive: [2019, 2020],
    },
    {
        name: 'Derek Feng',
        headshot: 'img/headshots/derek_feng.jpg',
        email: 'derekf2@uci.edu',
        major: 'Computer Science',
        description: 'Co-Founder, Systems',
        linkedin: 'https://www.linkedin.com/in/derek-feng/',
        graduatingYear: 2020,
        yearsActive: [2017],
    },
    {
        name: 'Dev Popat',
        headshot: 'img/headshots/dev_popat.jpg',
        email: 'popatd@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Web & Mobile Lead',
        linkedin: 'https://www.linkedin.com/in/dev-popat/',
        graduatingYear: 2022,
        yearsActive: [2020, 2021],
    },
    {
        name: 'Diego Torres',
        headshot: 'img/headshots/diego_torres.jpg',
        email: 'diegot1@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware & Electrical',
        linkedin: 'https://www.linkedin.com/in/diego-torres-557766157/',
        graduatingYear: 2019,
        yearsActive: [2018, 2019],
    },
    {
        name: 'Grace Choe',
        headshot: 'img/headshots/gracechoe.jpg',
        email: 'gschoe@uci.edu',
        major: 'Computer Science',
        description: 'Systems Design Lead',
        linkedin: 'https://www.linkedin.com/in/choegrace/',
        graduatingYear: 2021,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Jesse Chong',
        headshot: 'img/headshots/jesse_chong.jpg',
        email: 'chongjl@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile Lead',
        linkedin: 'https://www.linkedin.com/in/jesse-chong/',
        graduatingYear: 2021,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Joseph Chung',
        headshot: 'img/headshots/joseph_chung.jpg',
        email: 'jjchung3@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile Lead',
        linkedin: 'https://www.linkedin.com/in/joseph-chung-64b654192/',
        graduatingYear: 2021,
        yearsActive: [2020, 2021],
    },
    {
        name: 'Joshua Cao',
        headshot: 'img/headshots/joshcao.png',
        email: 'caoj11@uci.edu',
        major: 'Computer Science',
        description: 'Co-Founder, Tead Lead',
        linkedin: 'https://www.linkedin.com/in/joshua-cao/',
        graduatingYear: 2020,
        yearsActive: [2017, 2018, 2019, 2020],
    },
    {
        name: 'Kathy Nguyen',
        headshot: 'img/headshots/kathy.JPG',
        email: 'kathymn1@uci.edu',
        major: 'Electrical Engineering',
        description: 'Hardware & Electrical',
        linkedin: 'https://www.linkedin.com/in/kathy-nguyen-7549b5138/',
        graduatingYear: 2020,
        yearsActive: [2018, 2019, 2020],
    },
    {
        name: 'Marawin Chheang',
        headshot: 'img/headshots/marawin_chheang.jpg',
        email: 'chheangm@uci.edu',
        major: 'Software Engineering',
        description: 'Web & Mobile, UI/UX Design',
        linkedin: 'https://www.linkedin.com/in/mchheang/',
        graduatingYear: 2021,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Marissa Lafreniere',
        headshot: 'img/headshots/marissa_lafreniere.jpg',
        email: 'mlafreni@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition Lead',
        linkedin: 'www.linkedin.com/in/marissa-lafreniere',
        graduatingYear: 2022,
        yearsActive: [2018, 2019, 2020, 2021],
    },
    {
        name: 'Marshall Nguyen',
        headshot: 'img/headshots/marshall_nguyen.jpg',
        email: 'marshahn@uci.edu',
        major: 'Computer Science',
        description: 'Co-Founder, Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/marshall-nguyen-b4a634139/',
        graduatingYear: 2020,
        yearsActive: [2017],
    },
    {
        name: 'Martin Gomez',
        headshot: 'img/headshots/martin_gomez.jpg',
        email: 'martiag2@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware & Electrical',
        linkedin: 'https://www.linkedin.com/in/martin-gomez-ba3037180/',
        graduatingYear: 2022,
        yearsActive: [2019, 2020],
    },
    {
        name: 'Mohammed Haque',
        headshot: 'img/headshots/Mohammed_Haque.jpg',
        email: 'haquem1@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware & Electrical',
        linkedin: 'https://www.linkedin.com/in/mohammed-haque/',
        graduatingYear: 2020,
        yearsActive: [2019, 2020],
    },
    {
        name: 'Palak Gajera',
        headshot: 'img/headshots/palakgajera.jpg',
        email: 'pgajera@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/palak-gajera',
        graduatingYear: 2021,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Dr. Roberto Yus',
        headshot: 'img/headshots/Roberto_Yus.jpg',
        email: 'ryuspeir@uci.edu',
        major: 'Donald Bren School of ICS',
        description: 'Mentor and Advisor',
        yearsActive: [2017, 2018],
    },
    {
        name: 'Sharifa Jesmin',
        headshot: 'img/headshots/SharifaJesmin.jpg',
        email: 'sjesmin@uci.edu',
        major: 'Informatics',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/sharifa-jesmin-9309a973/',
        graduatingYear: 2021,
        yearsActive: [2020, 2021],
    },
    {
        name: 'Sidney Lau',
        headshot: 'img/headshots/sid.jpg',
        email: 'sidnel1@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/sidney-lau/',
        graduatingYear: 2020,
        yearsActive: [2018, 2019],
    },
    {
        name: 'Ted Zadouri',
        headshot: 'img/headshots/ted.jpg',
        email: 'tzadouri@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition Lead',
        linkedin: 'https://www.linkedin.com/in/tedzed/',
        graduatingYear: 2020,
        yearsActive: [2019, 2020, 2021],
    },
    {
        name: 'Tristan Samonte',
        email: 'tsamonte@uci.edu',
        major: 'Computer Science',
        description: 'Hardware & Electrical',
        linkedin: 'https://www.linkedin.com/in/tsamonte23/',
        graduatingYear: 2020,
        yearsActive: [2019],
    },
    {
        name: 'Primal Pappachan',
        headshot: 'img/headshots/Primal_Pappachan.jpg',
        email: 'primal@uci.edu',
        major: 'Donald Bren School of ICS',
        description: 'Mentor',
        yearsActive: [2018, 2019, 2020, 2021],
    },
    {
        name: 'Andrea Su',
        headshot: 'img/headshots/andrea_su.png',
        email: 'afsu@uci.edu',
        major: 'Electrical Engineering',
        description: 'Hardware Lead',
    },
    {
        name: 'Brianna Hernandez',
        headshot: 'img/headshots/Brianna_Hernandez.jpg',
        email: 'briannch@uci.edu',
        major: 'Electrical Engineering',
        description: 'Hardware Lead',
    },
    {
        name: 'Tyler Hanwinyoo',
        headshot: 'img/headshots/tyler_hanwinyoo.jfif',
        email: 'thanwiny@uci.edu',
        major: 'Biomedical Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/tylerhanwinyoo/',
        graduatingYear: 2022,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Jose Lopez',
        headshot: 'img/headshots/jose_lopez.jpg',
        email: 'jglopez3@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/jose-lopez-962222194/',
        graduatingYear: 2024,
        yearsActive: [2022],
    },
    {
        name: 'Patrick Nguyen',
        headshot: 'img/headshots/patrickNguyen.jpg',
        email: 'patrian1@uci.edu',
        major: 'Computer Science',
        description: 'Embedded Systems Lead',
        linkedin: 'https://www.linkedin.com/in/patrickanguyen/',
        graduatingYear: 2022,
        yearsActive: [2020, 2021],
    },
    {
        name: 'Nicholas Rene Norambuena',
        headshot: 'img/headshots/nick_norambuena.jpeg',
        email: 'nnorambu@uci.edu',
        major: 'Mechanical Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/nick-norambuena-bb93501a7 ',
        graduatingYear: 2022,
        yearsActive: [2021, 2022],
    },
    {
        name: 'Justin Yue',
        headshot: 'img/headshots/justin_yue.JPG',
        email: 'jpyue@uci.edu',
        major: 'Computer Science',
        description: 'Systems Lead',
        graduatingYear: 2024,
    },
    {
        name: 'Barry Gao',
        headshot: 'img/headshots/XiangboGao(Barry).jpeg',
        email: 'xiangbog@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition Lead',
    },
];

function getAlumniCard(alumni) {
    return `
    <div class="col-xl-3 col-lg-6">
        <div class="card">
            <img
                class="headshot"
                src="${alumni.headshot ? alumni.headshot : 'img/headshots/unknown.png'}"
                alt="Avatar"
            />
            <div style="margin: 10px 0; padding-bottom: 1px">
                ${alumni.linkedin ? `<a href="${alumni.linkedin}"><i class="fab fa-linkedin fa-lg" style="padding-right: 5px"></i></a>` : ''}
                ${alumni.email ? `<a href="mailto:${alumni.email}"><i class="fas fa-envelope fa-lg"></i></a>`: ''}
            </div>
            <div class="card-container">
                <h4><b>${alumni.name}</b></h4>
                <p>${alumni.major}</p>
                ${alumni.graduatingYear ? `<p>Undergraduate Class of ${alumni.graduatingYear}</p>`: ''}
                <p>${alumni.description}</p>
                ${alumni.yearsActive ? `<p><i>Years Active: ${alumni.yearsActive.join(', ')}</i></p>` : ''}
            </div>
        </div>
    </div>
    `;
}

function getSortedAlumni() {
    // Sort alumni by name
    const sortedAlumni = [...ALUMNI];
    sortedAlumni.sort((a, b) => a.name < b.name ? -1 : 1);
    return sortedAlumni;
}

function populateAlumni() {
    const sortedAlumni = getSortedAlumni();

    // Each row will contain 4 members, so go through each sublist of 4 elements
    for (let i = 0; i < sortedAlumni.length; i += 4) {
        $('#alumni').append(
            `
            <div class="row">
                ${getAlumniCard(sortedAlumni[i])}
                ${i + 1 < sortedAlumni.length ? getAlumniCard(sortedAlumni[i + 1]) : ''}
                ${i + 2 < sortedAlumni.length ? getAlumniCard(sortedAlumni[i + 2]) : ''}
                ${i + 3 < sortedAlumni.length ? getAlumniCard(sortedAlumni[i + 3]) : ''}
            </div>
            <br />
            `
        );
    }
}

populateAlumni();
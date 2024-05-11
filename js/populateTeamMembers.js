/**
 * PLEASE READ THIS ENTIRE COMMENT:
 * 
 * A team member is anyone who is currently working for ZotBins and is not a mentor or research advisor.
 * This does NOT include alumni. If someone is no longer affiliated with ZotBins, move their data to
 * the populateAlumni.js file
 * 
 * You can insert team members anywhere in the TEAM_MEMBERS array; all of the sorting and ordering is done
 * at the end of this file in the getSortedTeamMembers function.
 * 
 * Team Member Schema:
 * {
 *     name: string;
 *     headshot?: string;
 *     email?: string;
 *     major: string;
 *     description: string;
 *     linkedin?: string;
 *     spiritTrash?: string;
 *     graduatingYear?: number;
 *     subgroup: string;    // This is only used to order the team members based on subgroup
 *     position: 'Team Lead' | 'Subgroup Lead' | 'Member';    // This is only used to order the team members based on role
 * }
 */

const TEAM_MEMBERS = [
    {
        name: 'Rebecca Ahn',
        headshot: 'img/headshots/Rebecca Ahn.jpg',
        email: 'rebeca2@uci.edu',
        major: 'Computer Science',
        description: 'API Lead',
        linkedin: 'https://www.linkedin.com/in/rebecca-ahn/',
        spiritTrash: 'Kleenex Tissue',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Subgroup Lead',
    },
    {
        name: 'Davin Singh',
        headshot: 'img/headshots/davin_singh.jpg',
        email: 'dnsingh@uci.edu',
        major: 'Computer Science',
        description: 'Team Lead, API',
        linkedin: 'https://www.linkedin.com/in/davinsinghca/',
        spiritTrash: "Nemo's Carrot Cake Wrapper",
        graduatingYear: 2024,
        subgroup: 'API',
        position: 'Team Lead',
    },
    {
        name: 'Jason Zenarosa',
        email: 'zenarosa@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/jasonzenarosa',
        spiritTrash: 'Soup Can',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Emma Tong',
        headshot: 'img/headshots/emma_tong.jpeg',
        email: 'changrut@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'linkedin.com/in/emma-tong-ab5a69210',
        spiritTrash: 'Sanitizing Wipes',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Geric Capili',
        email: 'gcapili@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/gericcapili/',
        spiritTrash: 'Water Bottle',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Brianna Steier',
        headshot: 'img/headshots/BriannaSteier.jpg',
        email: 'bsteier@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'www.linkedin.com/in/briannasteier',
        spiritTrash: 'Tinsel',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Cali Kuang',
        headshot: 'img/headshots/CaliKuang.jpg',
        email: 'calik1@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/cali-kuang/',
        spiritTrash: 'Orange Peel',
        graduatingYear: 2026,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Manjot Singh',
        headshot: 'img/headshots/ManjotSingh.jpg',
        email: 'manjos2@uci.edu',
        major: 'Computer Science',
        description: 'API',
        linkedin: 'https://www.linkedin.com/in/manjot-singh18',
        spiritTrash: 'Chicken Scraps',
        graduatingYear: 2025,
        subgroup: 'API',
        position: 'Member',
    },
    {
        name: 'Anthony Chen',
        headshot: 'img/headshots/AnthonyChen.jfif',
        email: 'anthc15@uci.edu',
        major: 'Computer Engineering',
        description: 'Embedded Systems Lead',
        linkedin: 'https://www.linkedin.com/in/anthony-chen-639750174/',
        spiritTrash: 'Ramen Cup',
        graduatingYear: 2026,
        subgroup: 'Embedded Systems',
        position: 'Subgroup Lead',
    },
    {
        name: 'Krish Patel',
        headshot: 'img/headshots/krish_patel.jpeg',
        email: 'krishjp2@uci.edu',
        major: 'Computer Science',
        description: 'Team Lead, Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/krishjp/',
        spiritTrash: 'Apple Core',
        graduatingYear: 2026,
        subgroup: 'Embedded Systems',
        position: 'Team Lead',
    },
    {
        name: 'Alex Ikeda',
        email: 'ikedaas@uci.edu',
        major: 'Computer Engineering',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/alexikeda/',
        spiritTrash: 'Biodegradable Paper Bendy Straw',
        graduatingYear: 2027,
        subgroup: 'Embedded Systems',
        position: 'Member',
    },
    {
        name: 'Mina Yoon',
        email: 'jungmy1@uci.edu',
        major: 'Computer Science',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/mina-yoon-962921253/',
        spiritTrash: 'Smiski Boxes',
        graduatingYear: 2026,
        subgroup: 'Embedded Systems',
        position: 'Member',
    },
    {
        name: 'Eric Chan',
        email: 'echan14@uci.edu',
        major: 'Computer Science and Engineering',
        description: 'Embedded Systems',
        linkedin: 'https://www.linkedin.com/in/eric-chan-3946471b0',
        graduatingYear: 2026,
        subgroup: 'Embedded Systems',
        position: 'Member',
    },
    {
        name: 'Vatsal Ananthula',
        headshot: 'img/headshots/vatsal_ananthula.png',
        email: 'vananthu@uci.edu',
        major: 'Biological Sciences',
        description: 'Waste Recognition Lead',
        linkedin: 'https://www.linkedin.com/in/vatsal-ananthula/',
        spiritTrash: 'Orange Juice Bottle',
        graduatingYear: 2025,
        subgroup: 'Waste Recognition',
        position: 'Subgroup Lead',
    },
    {
        name: 'Randy Huynh',
        headshot: 'img/headshots/randy_huynh.jpg',
        email: 'randylh@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition Lead',
        linkedin: 'https://www.linkedin.com/in/randylhuynh/',
        spiritTrash: 'Dead Battery',
        graduatingYear: 2024,
        subgroup: 'Waste Recognition',
        position: 'Subgroup Lead',
    },
    {
        name: 'Arya Mhaiskar',
        headshot: 'img/headshots/AryaMhaiskar.jpeg',
        email: 'mhaiskaa@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/arya-mhaiskar/',
        spiritTrash: 'Energy Bar Wrapper',
        graduatingYear: 2026,
        subgroup: 'Waste Recognition',
        position: 'Member',
    },
    {
        name: 'Nathan Pietrantonio',
        headshot: 'img/headshots/NathanPietrantonio.jpg',
        email: 'pietrann@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/nathanlp/',
        spiritTrash: 'Coffee Grounds',
        graduatingYear: 2026,
        subgroup: 'Waste Recognition',
        position: 'Member',
    },
    {
        name: 'Badrish Ananth',
        headshot: 'img/headshots/BadrishAnanth.jpg',
        email: 'bananth@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/badrish-ananth-8a6311231/',
        spiritTrash: 'Carton',
        graduatingYear: 2027,
        subgroup: 'Waste Recognition',
        position: 'Member',
    },
    {
        name: 'Varun Sunkavalli',
        headshot: 'img/headshots/VarunSunkavalli.png',
        email: 'sunkaval@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/varun-sunkavalli/',
        graduatingYear: 2026,
        subgroup: 'Waste Recognition',
        position: 'Member',
    },
    {
        name: 'Vedant Saraswat',
        email: 'vsaraswa@uci.edu',
        major: 'Computer Science',
        description: 'Waste Recognition',
        linkedin: 'https://www.linkedin.com/in/pitess100/',
        graduatingYear: 2025,
        subgroup: 'Waste Recognition',
        position: 'Member',
    },
    {
        name: 'Douglas Hong',
        headshot: 'img/headshots/DouglasHong.jpg',
        email: 'douglah2@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile Lead',
        linkedin: 'https://www.linkedin.com/in/douglashong19/',
        spiritTrash: 'Chocolate Milk Carton',
        graduatingYear: 2024,
        subgroup: 'Web & Mobile',
        position: 'Subgroup Lead',
    },
    {
        name: 'Fiona Do',
        headshot: 'img/headshots/fiona_do.jpeg',
        email: 'fkdo@uci.edu',
        major: 'Software Engineering',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/fiona-do/',
        spiritTrash: 'Spinning Cat Wheel',
        graduatingYear: 2024,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'James Kwan',
        email: 'kwanj5@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/james-kwan-8484a5183/',
        spiritTrash: 'Ice Cream Tub',
        graduatingYear: 2024,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'Zion Mateo',
        headshot: 'img/headshots/ZionMateo.jpg',
        email: 'mateoz@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/zionmateo/',
        spiritTrash: 'M&M Wrapper',
        graduatingYear: 2026,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'Sophia Tran',
        headshot: 'img/headshots/SophiaTran.jpg',
        email: 'transb1@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/sophia-belle-tran/',
        spiritTrash: 'Ramen Packet Wrapper',
        graduatingYear: 2025,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'Stanley Liu',
        email: 'stanll7@uci.edu',
        major: 'Computer Science',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/stanleyliu20212024/',
        graduatingYear: 2024,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'Evan Servito',
        headshot: 'img/headshots/EvanServito.JPG',
        email: 'eservito@uci.edu',
        major: 'Computer Science & Engineering',
        description: 'Web & Mobile',
        linkedin: 'https://www.linkedin.com/in/evan-servito/',
        spiritTrash: 'Ziploc Bag',
        graduatingYear: 2025,
        subgroup: 'Web & Mobile',
        position: 'Member',
    },
    {
        name: 'Carm Ypil Hermosilla',
        email: 'cyhermos@uci.edu',
        major: 'Computer Science',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/carm-hermosilla/',
        subgroup: 'Hardware',
        position: 'Member',
    },
    {
        name: 'Bart Backer',
        headshot: 'img/headshots/BartBacker.jpg',
        email: 'bbacker@uci.edu',
        major: 'Electrical Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/bart-backer',
        spiritTrash: 'Crushed Cola Can',
        graduatingYear: 2027,
        subgroup: 'Hardware',
        position: 'Member',
    },
    {
        name: 'Kevin Thai',
        email: 'kthai7@uci.edu',
        major: 'Computer Science & Engineering',
        description: 'Hardware',
        subgroup: 'Hardware',
        position: 'Member',
    },
    {
        name: 'Naethan Fajarito',
        headshot: 'img/headshots/NaethanFajarito.jpg',
        email: 'nfajarit@uci.edu',
        major: 'Computer Engineering',
        description: 'Hardware',
        linkedin: 'https://www.linkedin.com/in/naethan-fajarito-b77968241/',
        spiritTrash: 'Boxed Water',
        graduatingYear: 2025,
        subgroup: 'Hardware',
        position: 'Member',
    },
];

function getTeamMemberCard(member) {
  return `
    <div class="col-xl-3 col-lg-6">
        <div class="card">
            <img
                class="headshot"
                src="${member.headshot ? member.headshot : 'img/headshots/unknown.png'}"
                alt="Avatar"
            />
            <div style="margin: 10px 0; padding-bottom: 1px">
                ${member.linkedin ? `<a href="${member.linkedin}"><i class="fab fa-linkedin fa-lg" style="padding-right: 5px"></i></a>` : ''}
                ${member.email ? `<a href="mailto:${member.email}"><i class="fas fa-envelope fa-lg"></i></a>`: ''}
            </div>
            <div class="card-container">
                <p><b>${member.description}</b></p>
                <h4><b>${member.name}</b></h4>
                <p>${member.major}</p>
                ${member.graduatingYear ? `<p>Undergraduate Class of ${member.graduatingYear}</p>`: ''}
                ${member.spiritTrash ? `<p><i>Spirit Trash: ${member.spiritTrash}</i></p>` : ''}
            </div>
        </div>
    </div>
    `;
}


function getSortedTeamMembers() {
    // Sort team leads by name
    const teamLeads = TEAM_MEMBERS.filter((member) => member.position === 'Team Lead');
    teamLeads.sort((a, b) => a.name < b.name ? -1 : 1);

    // Sort subgroup leads by subgroup
    const subgroupLeads = TEAM_MEMBERS.filter((member) => member.position === 'Subgroup Lead');
    subgroupLeads.sort((a, b) => a.subgroup < b.subgroup ? -1 : 1);

    // Sort members by subgroup
    const members = TEAM_MEMBERS.filter((member) => member.position === 'Member');
    members.sort((a, b) => a.subgroup < b.subgroup ? -1 : 1);

    return [...teamLeads, ...subgroupLeads, ...members];
}


function populateTeamMembers() {
    const sortedTeamMembers = getSortedTeamMembers();

    // Each row will contain 4 members, so go through each sublist of 4 elements
    for (let i = 0; i < sortedTeamMembers.length; i += 4) {
        $('#team-members').append(
            `
            <div class="row">
                ${getTeamMemberCard(sortedTeamMembers[i])}
                ${i + 1 < sortedTeamMembers.length ? getTeamMemberCard(sortedTeamMembers[i + 1]) : ''}
                ${i + 2 < sortedTeamMembers.length ? getTeamMemberCard(sortedTeamMembers[i + 2]) : ''}
                ${i + 3 < sortedTeamMembers.length ? getTeamMemberCard(sortedTeamMembers[i + 3]) : ''}
            </div>
            <br />
            `
        );
    }
}

populateTeamMembers();
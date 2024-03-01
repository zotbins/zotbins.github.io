/**
 * Research Advisor Schema:
 * {
 *     name: string;
 *     headshot: string;
 *     website: string;
 *     school: string;
 * }
 */

const RESEARCH_ADVISORS = [
    {
        name: 'Professor Sharad Mehrotra',
        headshot: 'img/headshots/sharad.jpg',
        website: 'https://www.ics.uci.edu/~sharad/',
        school: 'Donald Bren School of Information and Computer Sciences at UC Irvine'
    },
    {
        name: 'Professor Nalini Venkatasubramanian',
        headshot: 'img/headshots/nalini.jpg',
        website: 'https://www.ics.uci.edu/~nalini/',
        school: 'Donald Bren School of Information and Computer Sciences at UC Irvine'
    }
];

function getResearchAdvisorCard(advisor) {
  return `
    <div class="col-lg-6">
        <div class="card">
            <img
                class="headshot"
                src="${advisor.headshot}"
                alt="Avatar"
            />
            <div style="margin: 10px 0; padding-bottom: 1px">
                <a href="${advisor.website}"><i class="fas fa-link fa-lg"></i></a>
            </div>
            <div class="card-container">
                <h4><b>${advisor.name}</b></h4>
                <p>${advisor.school}</p>
            </div>
        </div>
    </div>
    `;
}


function populateMentors() {
    // Each row will contain 2 members, so go through each sublist of 2 elements
    for (let i = 0; i < RESEARCH_ADVISORS.length; i += 4) {
        $('#research-advisors').append(
            `
            <div class="row">
                ${getResearchAdvisorCard(RESEARCH_ADVISORS[i])}
                ${i + 1 < RESEARCH_ADVISORS.length ? getResearchAdvisorCard(RESEARCH_ADVISORS[i + 1]) : ''}
            </div>
            <br />
            `
        );
    }
}

populateMentors();
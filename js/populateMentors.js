/**
 * Mentor Schema:
 * {
 *     name: string;
 *     headshot: string;
 *     email: string;
 *     major: string;
 *     description: string;
 *     linkedin: string;
 *     graduatingYear: number;
 * }
 */

const MENTORS = [
	{
		name: 'Owen Yang',
		headshot: 'img/headshots/okyang.jpg',
		email: 'okyang@uci.edu',
		major: 'CompSci & Engineering',
		description: 'Co-Founder, Team Lead, Hardware Lead',
		linkedin: 'https://www.linkedin.com/in/owen-yang-200989138/',
		graduatingYear: 2020,
	}
];

function getMentorCard(mentor) {
  return `
	<div class="col-lg-6">
		<div class="card">
			<img
                class="headshot"
                src="${mentor.headshot}"
                alt="Avatar"
			/>
			<div style="margin: 10px 0; padding-bottom: 1px">
                <a href="${mentor.linkedin}"><i class="fab fa-linkedin fa-lg" style="padding-right: 5px"></i></a>
                <a href="mailto:${mentor.email}"><i class="fas fa-envelope fa-lg"></i></a>
			</div>
			<div class="card-container">
                <h4><b>${mentor.name}</b></h4>
                <p>${mentor.major}</p>
                <p>Undergraduate Class of ${mentor.graduatingYear}</p>
                <p>${mentor.description}</p>
			</div>
		</div>
	</div>
    `;
}


function populateMentors() {
    // Each row will contain 2 members, so go through each sublist of 2 elements
    for (let i = 0; i < MENTORS.length; i += 4) {
        $('#mentors').append(
            `
            <div class="row">
                ${getMentorCard(MENTORS[i])}
                ${i + 1 < MENTORS.length ? getMentorCard(MENTORS[i + 1]) : ''}
            </div>
            <br />
            `
        );
    }
}

populateMentors();
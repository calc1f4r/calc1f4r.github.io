<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
		{
			title: 'Selected as a Lift Scholar for 2024',
			time: 'June 2024'
		},
		{
			title: 'Won 1st place in a college-level debugging competition',
			additional: 'Debugged 7 levels in 15 minutes',
			time: 'October 2024'
		},
		{
			title: 'Participated in my first Hackathon',
			additional:
				'Secured runner-up position, developed ArtVault, a blockchain-based art marketplace',
			time: 'March 2024'
		},
		{
			title: 'Began learning about Blockchain',
			additional: 'Developed various projects on the Sepolia Chain',
			time: 'January 2024'
		},
		{
			title: 'Competed in Smart India Hackathon',
			additional: 'Ranked in the top 35 teams out of 700',
			time: 'September 2023'
		},
		{
			title: 'Started college',
			additional: 'Pursued a major in Computer Science with a focus on DevOps at CU',
			time: 'August 2023'
		},
		{
			title: 'Graduated from 12th grade',
			additional: 'Achieved 79% in board exams',
			time: 'June 2023'
		},
		{
			title: 'Explored Shell and Black Hat Python scripting',
			additional: 'Aimed to create my own scripts and avoid being labeled as a script-kiddie',
			time: 'October 2022'
		},
		{
			title: 'Dived into Web Security and started bug hunting',
			additional: 'Discovered several P2 and P3 vulnerabilities in various programs on Integrity',
			time: 'August 2022'
		},
		{
			title: 'Embarked on my Cybersecurity journey',
			additional:
				'Engaged in various CTFs on TryHackMe, PortSwigger, and HackTheBox, achieving a top 3-digit rank among millions on TryHackMe',
			time: 'June 2022'
		},
		{ title: 'Graduated from 10th grade', additional: 'with an impressive 94%', time: 'June 2022' },
		{
			title: 'Began learning Python',
			additional: 'Gained an in-depth understanding of the language',
			time: 'April 2022'
		},
		{
			title: 'Competed in PMGC',
			time: 'April 2022',
			additional: 'Participated in PUBG, ranking regionally in the game.'
		},
		{
			title: 'Landed my first freelance gig',
			time: 'March 2022',
			additional: 'Designed a website for a local business'
		},
		{
			title: 'Initiated my Web Development journey',
			time: 'January 2022',
			additional: 'Developed several front-end projects using vanilla JavaScript'
		},
		{
			title: 'Achieved second place in a Regional Science Competition',
			additional: 'Created a working model of smart home automation using Arduino',
			time: 'August 2021'
		},
		{
			title: 'Started learning C programming',
			additional: 'Developed various programs in C',
			time: 'July 2021'
		}
	];
</script>

<section class="flex p-3 flex-col">
	<h2
		class="font-semibold p-4 text-2xl sm:text-3xl md:text-4xl inline-block text-gray-100 hover:text-violet-300 transition-all duration-1000 ease-in-out cursor-pointer poppins border-b-2 border-transparent hover:border-violet-400"
	>
		TimeLine?
	</h2>
	<div>
		<Timeline position="alternate">
			{#each options as option}
				<TimelineItem>
					<TimelineOppositeContent slot="opposite-content">
						<p style="color:grey">{option.time}</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot style={'background-color: #a78bfa'} />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<h3 class="text-violet-200">{option.title}</h3>
						{#if option.additional}
							<p class="mt-2 text-sm tracking-wide text-zinc-300/80">{option.additional}</p>
						{/if}
					</TimelineContent>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</section>

<style>
	h3 {
		letter-spacing: 1.5px;
		margin: 0;
		padding: 0;
	}
</style>

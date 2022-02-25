import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MyFilters from './components/UI/MyFilters/MyFilters';
import HomePage from './pages/HomePage';
import LatestPage from './pages/LatestPage';
import PopularPage from './pages/PopularPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';
import NewsPiecePage from './pages/NewsPiecePage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';
import logo from "./assets/logo.svg";
import MyMenu from './components/UI/MyMenu/MyMenu';
import MyModal from './components/UI/MyModal/MyModal';
import GetUpdates from './components/GetUpdates/GetUpdates';
import ScrollToTopButton from './components/UI/ScrollToTopButton/ScrollToTopButton';
import { spider_man_2002, batman_begins_2005, scream_1996, signs_2002, i_know_what_you_did_last_summer_1997,motherless_brooklyn_2019, terminator_dark_fate_2019, oceans_2009, the_matrix_resurrections_2021, replicas_2018, the_kings_letters_2019, home_alone_1990, rush_hour_1998, the_mask_1994, taxi_1998, finding_nemo_2003, gladiator_2000, the_guardian_2006, togo_2019, knowing_2009, warrior_2011, alien_earths_2009, sharkwater_2006, maradona_2008, senna_2010, the_next_three_days_2010, bicentennial_man_1999, blade_1998, ransom_1996, the_ring_2002, silent_hill_2006, gothika_2003, the_mist_2007, the_tuxedo_2002, garfield_2004, the_quest_1996, the_shadow_1994, the_patriot_2000, cast_away_2000, the_prestige_2006, mousehunt_1997, marley_and_me_2008, the_shallows_2016, bears_2014, samsara_2011, movie_1408_2007, escape_plan_2013, the_expendables_2010, bean_1997, interstellar_2014 } from "./components";

function App() {
	const movies = [
        {
            id: 'spider-man-2002', 
            title: 'Spider-Man', 
            year: 2012,
            country: 'USA',
            genres: ['action', 'adventure', 'fantasy'],
            director: 'Sam Raimi',
            duration: '2 hours 01 minutes',
            rating: 10,
            image: {
                image: spider_man_2002,
                alt: 'Spider-Man'
            },
			latest: false,
			popular: false,
            description: [
                `The fantastic film "Spider-Man", based on the comic book of the same name, tells about a super-hero who saved the city from villains. Modest Peter Parker is an ordinary schoolboy who lives in a tiny apartment and secretly dreams of his neighbor Mary Jane. Once he was bitten by a mutated spider and after that the life of a shy guy changed.`,
                `Peter felt new abilities in himself: endurance, strength and the ability to climb walls and ceilings. The most incredible thing that Peter discovered in himself was the ability to release a strong web, like spiders. So Peter, aka Spider-Man, begins to fight criminals, protecting the population of the city.`,
                `But for every superhero, there is an antihero. As a result of an unsuccessful scientific and military experiment, Peter's father's friend, Norman Osborn, becomes a victim of his own development and turns into the Green Goblin, which inspires fear in the city. But Spider-Man will easily defeat any enemy because he is invulnerable and fast and strong.`,
            ]
        },
        {
            id: 'batman-begins-2005',
            title: 'Batman Begins',
            year: 2015,
            country: 'United Kingdom, USA',
            genres: ['action', 'crime', 'drama', 'thriller'],
            director: 'Christopher Nolan',
            duration: '2 hours 20 minutes',
            rating: 9,
            image: {
                image: batman_begins_2005,
                alt: 'Batman Begins' 
            },
			latest: false,
			popular: true,
            description: [
                `The continuation of the popular film cycle about the man-bat "Batman Begins" tells about how Wayne, after his travels around the world, gained strength and returns to his native Gotham to continue to inspire fear and horror in all evil. During his wanderings, he learned a lot of new things, which further tempered his spirit and directed him on the right path. A super new super suit and a super mobile are being created today. Batman is back in the game and now no one will run away from his justice.`,
            ]
        },
        {
            id: 'scream-1996', 
            title: 'Scream',
            year: 2018,
            country: 'USA',
            genres: ['crime', 'detective', 'horror', 'thriller'],
            director: 'Wes Craven',
            duration: '1 hour 54 minutes',
            rating: 7,
            image: {
                image: scream_1996,
                alt: 'Scream' 
            },
			latest: false,
			popular: false,
            description: [
                `The movie "Scream" is the beginning of the story of a masked maniac who loves horror films and kills for fun. His insidious game begins with the fact that he calls his victim on the phone and inspires fear in her. Then there is the issue of physical violence. He always comes in his horrible mask and cape, like he's starring in a horror movie.`,
                `The sweet girl Cindy should become his next victim, but having met the killer on the first night, she managed to stay alive, and the police find his mask. As it turns out, it was bought in a horror shop and is of no value for the investigation. In general, Cindy is on the lookout and the death game continues ...`,
            ]
        },
        {
            id: 'the-expendables-2010', 
            title: 'The Expendables',
            year: 2012,
            country: 'USA',
            genres: ['action'],
            director: 'Sylvester Stallone',
            duration: '1 hour 43 minutes',
            rating: 5,
            image: {
                image: the_expendables_2010,
                alt: 'The Expendables' 
            },
			latest: false,
			popular: true,
            description: [
                `The Expendables is a light action movie directed by Sylvester Stallone and himself taking part in the film as one of its main characters. The plot of the film is about how a group of professional hired militants takes on another task, which turns out to be difficult and turns their already boring life into a real combat adventure for several days.`,
                `This time they need to go to a foreign unfriendly country to find and neutralize the instigator of wars and lawlessness, smash everything to hell and free a sweet girl who turned out to be the daughter of one of the leaders.`,
            ]
        },
        {
            id: 'signs-2002', 
            title: 'Signs',
            year: 2022,
            country: 'USA',
            genres: ['detective', 'drama', 'science fiction', 'thriller'],
            director: 'M. Night Shyamalan',
            duration: '1 hour 46 minutes',
            rating: 5,
            image: {
                image: signs_2002,
                alt: 'signs' 
            },
			latest: true,
			popular: false,
            description: [
                `In various parts of the world, strange signs have long been discovered on the fields, as well as in remote flat areas that can exceed football fields in size. One of these mysterious phenomena was encountered by the Hess family in their cornfield in a small town in Pennsylvania. Former priest Graham Hess lives with his two children and younger brother, former baseball player Merrill, on the farm. After the tragic death of his wife, who was hit by a car, Graham refused to be a clergyman.`,
                `With his brother and children, he leads a quiet, measured life in the rural wilderness, growing and selling corn, until strange things begin to happen near their house. One day, Graham discovers in his corn field evenly sloping huge groves that look like some kind of signs. Who did this? And what does it all mean? A quiet life is disturbed by the invasion of the unknown, in order to figure it out, the Hess brothers begin their investigation, and in the meantime, TV news broadcasts about mysterious aliens that have appeared in different parts of the planet.`,
            ]
        },
        {
            id: 'motherless-brooklyn-2019',
            title: 'Motherless Brooklyn',
            year: 2019,
            country: 'USA',
            genres: ['crime', 'detective', 'drama'],
            director: 'Edward Norton',
            duration: '2 hours 24 minutes',
            rating: 8,
            image: {
                image: motherless_brooklyn_2019,
                alt: 'Motherless Brooklyn' 
            },
			latest: false,
			popular: false,
            description: [
                `The action of the feature film "Motherless Brooklyn" takes place in the mid-50s of the twentieth century in New York. Private detective Frank Mina greatly helped the unlucky guy with Tourette's syndrome Lionel Essrog, took him on his team and taught him how to work with his head. When Frank becomes a victim of local gangsters, the investigation of his unfinished business becomes a matter of honor for Lionel, who is determined to clear the good name of a mentor and friend. However, the private detective does not even suspect what danger awaits him ahead.`,
            ]
        },
        {
            id: 'terminator-dark-fate-2019', 
            title: 'Terminator: Dark Fate',
            year: 2022,
            country: 'China, USA',
            genres: ['action', 'adventure', 'science fiction'],
            director: 'Tim Miller',
            duration: '2 hours 08 minutes',
            rating: 7,
            image: {
                    image: terminator_dark_fate_2019,
                    alt: 'Terminator: Dark Fate' 
            },
			latest: false,
			popular: false,
            description: [
                `The fantastic blockbuster "Terminator: Dark Fate" continues to tell about the dangerous adventures of Sarah Connor, who prevented the day of judgment and saved humanity from imminent death in the future, along with her son John. But years later, it turns out that although Sarah Connor and John changed the future, they did not change the fate of mankind. In the future, a certain girl Dani Ramos will become the leader of the resistance, so a resistance fighter with enhanced cybernetic capabilities of Grace's body arrives to protect her from the future. True, it will be very difficult for Grace to cope alone in the fight against the latest terminator model. Luckily, real Terminator hunter Sarah Connor comes to the rescue.`,
            ]
        },
        {
            id: 'oceans-2009', 
            title: 'Oceans',
            year: 2022,
            country: 'France, Spain, Switzerland',
            genres: ['documentary'],
            director: 'Jacques Perrin',
            duration: '1 hour 26 minutes',
            rating: 3,
            image: {
                    image: oceans_2009,
                    alt: 'Oceans' 
            },
			latest: true,
			popular: true,
            description: [
                `From the creator of Birds and the Microcosmos, a documentary that has no analogues at the moment. An underwater world that lives in weightlessness and harmony, a world that we humans can only occasionally observe. Do we know exactly how life goes on in this wonderful world? No. The unique, beautiful and exciting film "Oceans" will tell us about this. Filming took place around the world, 15 cameramen were involved, shooting more than 500 hours of film. It took more than 2 years to prepare the shooting and even more than 3.5 years to shoot.`,
                `Interesting facts: in the work on the film "Oceans" Jacques Perrin was assisted by dozens of organizations, including the European Space Agency and the French Ministry of Defense, an army of consultant oceanologists and even a ship of the French navy; the budget of the film is 50 million euros, which exceeds the budget of some Hollywood blockbusters.`,
            ]
        },
        {
            id: 'the-matrix-resurrections-2021', 
            title: 'The Matrix Resurrections', 
            year: 2021,
            country: 'Australia, United Kingdom, USA',
            genres: ['action', 'science fiction'],
            director: 'Lana Wachowski',
            duration: '2 hours 28 minutes',
            rating: 3,
            image: {
                    image: the_matrix_resurrections_2021,
                    alt: 'The Matrix Resurrections' 
            },
			latest: false,
			popular: false,
            description: [
                `The protagonist of the science fiction action movie The Matrix: Resurrection - Thomas Anderson lives an ordinary life in a big metropolis, develops video games, visits a coffee shop in his spare time, where he watches one regular visitor, and also visits a psychotherapist. Thomas needs therapy, as he is greatly disturbed by his reality and strange flashes of memories from a completely different world. True, the therapist convinces Mr. Anderson that all this is a figment of his imagination, which helped him create a popular series of games called "The Matrix", where there is a superhero Neo, his beloved Trinity, mentor Morpheus and the fight against machines. However, one day, Mr. Anderson sees the "White Rabbit" again and decides to follow him...`,
            ]
        },
        {
            id: 'replicas-2018',
            title: 'Replicas',
            year: 2018,
            country: 'USA',
            genres: ['science fiction', 'thriller'],
            director: 'Jeffrey Nachmanoff',
            duration: '1 hour 47 minutes',
            rating: 8,
            image: {
                    image: replicas_2018,
                    alt: 'Replicas' 

            },
			latest: false,
			popular: false,
            description: [
                `The actions of the fantastic thriller "Reproduction" take place in the near future, in which a talented scientist, neuroscientist Will Foster is studying not only the human brain, but also the very secret of life. Caught on the threshold of a phenomenal discovery, Will loses his beloved wife and children. However, Will is ready to defy nature in order to bring his family back to life.`,
                `Having all the necessary devices and equipment for the transfer of consciousness, Will proceeds to human reproduction, which will be a world breakthrough. But this scientific experiment to bring people back from the dead violates all the laws of nature and ethics, which threatens Will with big problems.`,
            ]
        },
        {
            id: 'the-king\'s-letters-2019', 
            title: 'The King\'s Letters',
            year: 2012,
            country: 'South Korea',
            genres: ['biography', 'drama', 'history'],
            director: 'Jo Chul-hyun',
            duration: '1 hour 50 minutes',
            rating: 5,
            image: {
                    image: the_kings_letters_2019,
                    alt: 'he King\'s Letters' 
            },
			latest: false,
			popular: false,
            description: [
                `The actions of the historical drama "The Language of the Nation" take place in the middle of the 15th century on the lands of the state of Joseon and tell about the long, painstaking work to create and spread Korean writing. With the beginning of the reign of the wise King Sejong, a number of reforms and a great cultural upsurge took place in the state. But the monarch is not satisfied that the people do not have their own written language. With the help of Buddhist monks who know Sanskrit, numerous scholars and his own sons, King Sejong organizes an entire academy for the study and compilation of writing so that it can be used by the common people, and not just educated people at court.`,
            ]
        },
        {
            id: 'home-alone-1990', 
            title: 'Home Alone',
            year: 2012,
            country: 'USA',
            genres: ['adventure', 'comedy'],
            director: 'Chris Columbus',
            duration: '1 hour 43 minutes',
            rating: 5,
            image: {
                    image: home_alone_1990,
                    alt: 'Home Alone' 
            },
			latest: false,
			popular: true,
            description: [
                `The comedy film "Home Alone" tells how on Christmas Eve a huge family is going to spend the holidays in Paris. Before the flight, all relatives gather at the McCallister house, where crazy chaos immediately begins. Children run like crazy, swear and tease each other. So the younger Kevin was punished for his misconduct - to sleep in the attic. After oversleeping, the family in a hurry collects things and flies like a bullet to the airport, forgetting Kevin's home.`,
                `Always dreaming of being alone at home alone and doing what he wants, Kevin is not at a loss, but quite pleasantly spends time at home. Only now petty thieves are operating in the houses, who decided to profit while the owners left for the holidays. Once in the McCallister house, thieves will greatly regret it, because a cute kid has prepared a lot of surprises for them.`,
            ]
        },
        {
            id: 'rush-hour-1998', 
            title: 'Rush Hour', 
            year: 2013,
            country: 'USA',
            genres: ['action', 'comedy'],
            director: 'Brett Ratner',
            duration: '1 hour 38 minutes',
            rating: 10,
            image: {
                    image: rush_hour_1998,
                    alt: 'Rush Hour' 
            },
			latest: false,
			popular: true,
            description: [
                `The plot of the action comedy "Rush Hour" is the story of two police officers who are completely different in character and manner of working, who are investigating a case at the level of national importance.`,
                `In the city of angels, Los Angeles, a little girl, the daughter of a Chinese consul in the United States, is kidnapped. The kidnappers extort a huge amount of money for the return of the girl, and in the meantime, the FBI sends the best employees in search of the child. But the wayward consul summons the best police officer Lee from Hong Kong to help solve the case faster, and the smart ones from the FBI, on the contrary, are confident in their abilities that they can cope without anyone's help, even at rush hour.`,
                `Therefore, they decide to assign to Lou the most unfortunate and, moreover, very talkative police officer James Carter. Lou's acquaintance with Carter leads to a series of ridiculous misunderstandings, quarrels and disagreements, but after a period of grinding, both police officers take the matter seriously.`,
            ]
        },
        {
            id: 'gothika-2003', 
            title: 'Gothika',
            year: 2014,
            country: 'USA',
            genres: ['detective', 'horror', 'thriller'],
            director: 'Mathieu Kassovitz',
            duration: '1 hour 38 minutes',
            rating: 4,
            image: {
                    image: gothika_2003,
                    alt: 'Gothika' 
            },
			latest: false,
			popular: false,
            description: [
                `For fans of thrillers, horror, detective stories, and... Halle Berry, we present the film "Gothic", which promises to tickle your nerves. The plot shows the dumb story of one girl who ended up as a patient (well, in general, ended up) in a psychiatric hospital for criminals, where she herself worked before. She does not remember at all how and what happened, and she is accused of a brutal murder. In the course of her guesses, the girl begins to understand that something unclean is taking place here. How this dramatic story will end, see the feature film "Gothic".`,
            ]
        },
        {
            id: 'the-mask-1994',
            title: 'The Mask',
            year: 2014,
            country: 'USA',
            genres: ['action', 'comedy', 'crime', 'fantasy', 'melodrama'],
            director: 'Chuck Russell',
            duration: '1 hour 41 minutes',
            rating: 4,
            image: {
                    image: the_mask_1994,
                    alt: 'The Mask' 
            },
			latest: false,
			popular: false,
            description: [
                `In the plot of the feature film "The Mask", based on the comic book of the same name, the action takes place in the fictional town of Edge City. Stanley Ipkiss is an ordinary bank clerk, insecure and very insecure in life. Stanley's only friends are his work colleague Charlie and his dog named Milo.`,
                `One day, late in the evening, Stanley finds an interesting little thing - a wooden mask, and accidentally putting it on his face turns into a mythical creature of a green twister, whose costume is more like a clown's. The Mask openly taunts his annoying neighbor, scaring her half to death, as well as everyone who has ever humiliated him.`,
                `However, fun pranks do not prevent the Mask from becoming a superhero who terrifies the criminals of the city. Cameron Diaz, a well-known actress, and then a newcomer to the big world of cinema, played her debut role in the comedy The Mask.`,
            ]
        },
        {
            id: 'taxi-1998', 
            title: 'Taxi',
            year: 2016,
            country: 'France',
            genres: ['action', 'comedy', 'crime'],
            director: 'Gerard Pires',
            duration: '1 hour 26 minutes',
            rating: 6,
            image: {
                    image: taxi_1998,
                    alt: 'Taxi' 
            },
			latest: false,
			popular: true,
            description: [
                `The action of the feature film "Taxi" takes place in the French city of Marseille. Young guy Daniel quits his job as a pizza delivery man and becomes a taxi driver. He loves sports and racing cars, he is obsessed with fast driving, and he made a real rocket out of his Peugeot. Daniel immediately asks the passengers who got into his taxi to fasten their seat belts in such a way that they will not drive around Marseille, but fly. Taking into account the predilection for dashing driving, Daniel hates the police, because they constantly write him tickets for speeding.`,
                `And then one day, a passenger got into Daniel's taxi, who turned out to be a policeman and caught the criminal in the hot. The policeman Emilien is a loser in life, he is always unlucky, he can’t even pass his driving license, he is also ashamed of his work and tells everyone he knows that he works at IBM. Fate brought the two heroes together for a reason. It was at this time that a gang of criminals was operating in Marseille, who brazenly robbed banks, but disappeared without a trace in their German Mercedes. In order not to lose face, the police must catch the thieves. So Emilien voluntarily-compulsorily forces Daniel to help in the police investigation, and if he doesn’t help, he will lose his rights.`,
            ]
        },
        {
            id: 'finding-nemo-2003', 
            title: 'Finding Nemo',
            year: 2016,
            country: 'Australia, USA',
            genres: ['adventure', 'comedy'],
            director: 'Andrew Stanton',
            duration: '1 hour 32 minutes',
            rating: 2,
            image: {
                    image: finding_nemo_2003,
                    alt: 'Finding Nemo' 
            },
			latest: false,
			popular: false,
            description: [
                `"Finding Nemo" takes us to the depths of the ocean where the underwater, colorful world of fish is seething.`,
                `Among the stunningly beautiful seascapes, in the area of ​​a large barrier reef, the clownfish Marlin lives in a coral house, who alone brings up his only son Nemo.`,
                `The ocean is fraught with not only the beauty of the underwater world, but also many dangers that frighten Marlin. He tries his best to keep the extremely curious son Nemo from trying to find out more about the mysterious reef located next to their house. But the curious Nemo is too far from home, people catch him. Nemo's fate is to be one of the beautiful aquarium fish, complementing the interior of the office.`,
                `Having lost the sons of Marlin, he overcomes panic and decides to go in search of his son. Together with his good friend the royal blue fish Dory, who also suffers from unconsciousness and passes out at inopportune moments, they go on a crazy journey in search of Nemo.`,
            ]
        },
        {
            id: 'gladiator-2000', 
            title: 'Gladiator',
            year: 2020,
            country: 'United Kingdom, USA',
            genres: ['adventure', 'drama', 'history'],
            director: 'Ridley Scott',
            duration: '2 hours 51 minutes',
            rating: 6,
            image: {
                    image: gladiator_2000,
                    alt: 'Gladiator' 
            },
			latest: false,
			popular: true,
            description: [
                `Gladiator is a 2000 historical film directed by Ridley Scott. The film takes place in 180 AD. during the reign of Marcus Aurelius. The Roman Empire did not know a braver warrior than General Maxius, he was a noble man, a great military leader, commander of the legions. After the battle with the German barbarians ends with the victory of Rome, the glorious general finds himself at the center of political intrigues. Maximus is accused of rebellion and sentenced to death, but he manages to escape. After a while, he becomes a gladiator, fighting in fierce duels in the arena of the Colosseum. Having become famous as a strong opponent, Maximus will face the final battle with his worst enemy.`,
            ]
        },
        {
            id: 'the-guardian-2006', 
            title: 'The Guardian',
            year: 2017,
            country: 'USA',
            genres: ['adventure', 'drama'],
            director: 'Andrew Davis',
            duration: '2 hours 19 minutes',
            rating: 3,
            image: {
                    image: the_guardian_2006,
                    alt: 'The Guardian' 
            },
			latest: false,
			popular: false,
            description: [
                `In the plot of the dramatic film "The Guardian", a young, stubborn and wayward guy Jake Fisher gets into a swimmer's school, where they train Coast Guard lifeguards. There he meets coach Ben Randall, who will train the guys for 18 weeks and teach them all the necessary knowledge and skills. However, Jake's relationship with coach Randall frankly does not work out. Legendary rescue swimmer Ben Randall is unable to recover from an accident that claimed the lives of his entire rescue team, so he decided to "retire" and train young swimmers.`,
                `He does not like the difficult Fisher, but over time he begins to see good potential in the guy and tries to help him. When a distress call is received from a ship in the cold waters of the Bering Sea, Randall and Fisher go to rescue people without hesitation. An important test awaits them ahead, and the lifeguard Jake will have to pass his main exam in life...`,
            ]
        },
        {
            id: 'togo-2019', 
            title: 'Togo',
            year: 2022,
            country: 'USA',
            genres: ['adventure', 'drama'],
            director: 'Ericson Core',
            duration: '1 hour 53 minutes',
            rating: 4,
            image: {
                    image: togo_2019,
                    alt: 'Togo' 
            },
			latest: true,
			popular: false,
            description: [
                `The adventure film "Togo" is based on a true story that took place back in 1925 in Alaska. Leonard Sepalla breeds sled dogs, which are very much needed in the snowy northern expanses. From birth, the dog Togo was small, problematic and untrainable, but bypassed all the dogs in terms of speed. He became the leader in the team and the most devoted dog to his master. When a diphtheria epidemic breaks out in the city, taking the lives of children, Leonard sets off on a long and difficult journey to get a package of medicines on a dog sled led by 12-year-old Togo.`,
            ]
        },
        {
            id: 'knowing-2009', 
            title: 'Knowing',
            year: 2014,
            country: 'Australia, United Kingdom, USA',
            genres: ['science fiction', 'thriller'],
            director: 'Alexander Proyas',
            duration: '2 hours 01 minutes',
            rating: 6,
            image: {
                    image: knowing_2009,
                    alt: 'Knowing' 
            },
			latest: false,
			popular: true,
            description: [
                `Action science fiction thriller "Knowing" begins in 1959 in Massachusetts. Young schoolchildren were asked to draw pictures of what the future would look like in their opinion. Then these drawings were closed in a time capsule and buried near the school. Exactly 50 years later, the container with the drawings was opened and envelopes were handed out to schoolchildren. But the boy Caleb gets not a drawing, but a piece of paper covered with numbers. He shows this sheet to his father, astrophysics professor John Kastler, who finds a connected chain in incomprehensible sets of numbers.`,
                `In the course of his investigation, John finds a mysterious connection between combinations of numbers with all the world's events that have occurred just over the past 50 years. And the girl Lucinda, who wrote these figures back in 1959, was out of her mind when she was found hiding in the school closet. Using combinations of numbers that, like a sign, indicate another tragedy, John is trying with all his might to prevent the inevitable. Moving along the list, he finds at the end not numbers, but some kind of letter designation, which speaks of the death of the entire planet ...`,
            ]
        },
        {
            id: 'warrior-2011', 
            title: 'Warrior',
            year: 2018,
            country: 'USA',
            genres: ['drama', 'sports'],
            director: 'Gavin O\'Connor',
            duration: '2 hours 20 minutes',
            rating: 5,
            image: {
                    image: warrior_2011,
                    alt: 'Warrior' 
            },
			latest: false,
			popular: false,
            description: [
                `The plot of the feature film "Warrior" is the story of the difficult relationship of two brothers Tom and Brendan with their alcoholic father and former boxer Paddy Conlon. After serving in the army and participating in the fighting in the Middle East, Tommy returns home with the sole purpose of having his father start training him to win the ultimate fighting tournament. Difficult life situation forces older brother Brendan, who started teaching physics at a local school, to return to the ring.`,
                `The brothers have not talked to each other for a very long time, because of their father's alcoholism there is a huge gap between them, but the upcoming championship makes Tommy and Brendan not only talk, but also sort out their relationship, throw out all the grievances. However, the main problem of the warriors is the fight with each other for the title of the best fighter and the financial prize, which both brothers really need.`,
            ]
        },
        {
            id: 'sharkwater-2006', 
            title: 'Sharkwater',
            year: 2020,
            country: 'Canada',
            genres: ['documentary'],
            director: 'Rob Stewart',
            duration: '1 hour 29 minutes',
            rating: 6,
            image: {
                    image: sharkwater_2006,
                    alt: 'Sharkwater' 
            },
			latest: false,
			popular: false,
            description: [
                `The documentary "Sharkwater" tells about underwater inhabitants who have been living on the planet for 450 million years and are the most ancient representatives of the animal world. For a person, the word "shark" is associated with danger, therefore, at the sight of a shark in the open sea, most people experience panic fear. But is the shark as scary as it seems? Perhaps the myth of the danger to humans was reinforced by horror films, and marine predators do not pose a threat, because shark attacks on people are rare and very few.`,
                `The documentary is about the world of sharks, about the ruthless poaching by people who exterminate sharks for the fishing industry and pharmaceutical production, and some even just for fun. Unfortunately, the widespread myth about killer fish leads to terrible consequences and a violation of the fragile world of these animals, which are necessary in the cycle of nature just like dolphins or elephants.`,
            ]
        },
        {
            id: 'maradona-2008', 
            title: 'Maradona',
            year: 2015,
            country: 'France, Spain',
            genres: ['biography', 'documentary', 'sports'],
            director: 'Emir Custurica',
            duration: '1 hour 30 minutes',
            rating: 6,
            image: {
                    image: maradona_2008,
                    alt: 'Maradona' 
            },
			latest: false,
			popular: true,
            description: [
                `The documentary "Maradona" tells about one of the most talented and significant football players in the history of sports, the best football player of the 20th century voted on the official FIFA website, the Argentinean Diego Maradona. Film director Emir Kusturica offers a slightly unusual version of the story. He does not follow the chronological sequence and divides the film into seven parts, each of which is named after one of the deadly sins. Yes, the legendary football player has never been a saint, but the most famous and scandalous goal in the history of football, scored by Maradona, was called the “Hand of God”.`,
                `The film tells about his drug addiction, because of which Maradona was forced to cut his sports career. The viewer will also learn about Maradona's personal life, about his family, friends, which include such personalities as: Hugo Chavez, Fidel Castro and Pele, about his retirement activities, as well as about political views.`,
            ]
        },
        {
            id: 'the-next-three-days-2010', 
            title: 'The Next Three Days',
            year: 2012,
            country: 'USA',
            genres: ['crime', 'drama', 'melodrama', 'thriller'],
            director: 'Paul Edward Haggis',
            duration: '2 hours 13 minutes',
            rating: 8,
            image: {
                    image: the_next_three_days_2010,
                    alt: 'The Next Three Days' 
            },
			latest: false,
			popular: false,
            description: [
                `John Brenan lives with his charming wife and young son a calm and measured American life. But what can not happen when an evil joke of fate can turn the person dearest to you into an imaginary murderer by law. John has lived with his wife for many years, he knows her like no other, he is convinced of her innocence and is ready to do anything to rescue her from the iron shackles of vicious justice.`,
                `He will need to change his essence, turn from a respectable citizen into a criminal, pick up a gun and turn into a killer. Yes, kill a drug dealer, but still a human. But John has no other choice, because in order to accomplish what he has planned, a huge amount of money is needed.`,
                `He has only three days to escape, only three days to prepare for the fact that only action and comic book heroes can do it. After all, organizing an escape from prison is actually a very difficult task, and only such a strong love that he has can help him, give him strength and perseverance, aspirations and good luck. These three days will turn their whole life upside down, but whatever it is, justice may not prevail.`,
                `The thriller "Three Days to Escape" as a whole leaves a positive feeling, a cocktail of an interesting dynamic plot and excellent acting turned out to be original and enjoyable. The director of the film, Paul Haggis, will tell us how everything will end in this amazing story.`,
            ]
        },
        {
            id: 'bicentennial-man-1999', 
            title: 'Bicentennial Man',
            year: 2016,
            country: 'Germany, USA',
            genres: ['drama', 'melodrama', 'science fiction'],
            director: 'Chris Columbus',
            duration: '2 hours 06 minutes',
            rating: 3,
            image: {
                    image: bicentennial_man_1999,
                    alt: 'Bicentennial Man' 
            },
			latest: false,
			popular: true,
            description: [
                `The feature film "Bicentennial Man" tells about freedom, love, friendship, care, the right to life in society and the death of a unique cyborg robot named Andrew. The film takes place on the threshold of the third millennium, when the world is experiencing significant technological progress in the creation of artificial intelligence. The new pets are not animals, but new generation robots that significantly improve people's lives. Richard Martin decides to give his family a gift and buys an NDR-114 robot, who is then named Andrew.`,
                `Together with the life of the family, Andrew learns a lot of interesting things for himself, from a simple assistant he becomes a real member of the family, shares the joy and sadness of his owners. Over the course of two centuries, Andrew significantly developed his abilities and inner world, he began to feel and experience various emotions inherent in people. Andrew even fell in love with the great granddaughter of his owners, Portia Charni, and experienced this bright feeling of mutual love.`,
            ]
        },
        {
            id: 'the-ring-2002', 
            title: 'The Ring',
            year: 2015,
            country: 'Japan, USA',
            genres: ['detective', 'horror', 'thriller'],
            director: 'Gore Verbinski',
            duration: '1 hour 55 minutes',
            rating: 5,
            image: {
                    image: the_ring_2002,
                    alt: 'The Ring' 
            },
			latest: false,
			popular: true,
            description: [
                `The Ring is a 2002 Japanese horror film directed by Gore Verbinski. The film tells the story of a young journalist, Rachel, who is investigating several mysterious and horrific deaths associated with watching a strange videotape.`,
                `Seeing the death of her friend, a teenage girl ended up in a psychiatric clinic, and this case cannot but interest Rachel. She finds the ill-fated cassette, makes a copy of it, and looks through the tape, but finds nothing out of the ordinary, other than strange passages. But later, Rachel learns that after watching, the person receives a phone call, and a week later dies in agony.`,
                `However, everything would not be so bad if Rachel's little son had not watched the cassette. In a panic, she turns to her friend Noah for help, who helps Rachel inquire about the people on the tape and figure out why all the victims are receiving a mysterious call. They have a week of time for everything about everything, if they do not solve the terrible secret, then exactly in a week they will die.`,
            ]
        },
        {
            id: 'senna-2010', 
            title: 'Senna',
            year: 2017,
            country: 'United Kingdom',
            genres: ['biography', 'documentary', 'sports'],
            director: 'Asif Capadia',
            duration: '2 hours 42 minutes',
            rating: 3,
            image: {
                    image: senna_2010,
                    alt: 'Senna' 
            },
			latest: false,
			popular: false,
            description: [
                `The documentary "Senna" is dedicated to the famous Brazilian race car driver, three-time world champion in Formula 1 - Ayrton Senna. He was born and raised in Sao Paulo, in a fairly wealthy family. At the age of four, Ayrton first sat behind the wheel of a car, and at thirteen he participated in karting competitions. According to a survey conducted among former and current Formula 1 drivers, Senna was recognized as the best driver in the history of the competition.`,
                `For the unique talent of passing the track during the rains, overtaking rivals in difficult areas and significant superiority, the fans and the press gave the racer the nickname Rain Man. In ten years of his career, Senna has 41 wins, 19 fastest laps and 614 points. Ayrton Senna was not just a great racer, he also did charity work. He created the Ayrton Senna Foundation, a charitable relief fund, whose funds went to help the poor and poor young people of his native country of Brazil. Unfortunately, the life of the famous racer was cut short in an accident in 1994 while participating in the San Marino Grand Prix in Imola.`,
            ]
        },
        {
            id: 'blade-1998', 
            title: 'Blade',
            year: 2021,
            country: 'USA',
            genres: ['action', 'fantasy', 'horror'],
            director: 'Stephen Norrington',
            duration: '2 hours 00 minutes',
            rating: 6,
            image: {
                    image: blade_1998,
                    alt: 'Blade' 
            },
			latest: false,
			popular: true,
            description: [
                `Blade is a fantasy action movie based on the Marvel comic book of the same name. The plot of the film tells about a unique half-vampire, half-human hybrid named Blade, who inherited such a mutation as a result of a vampire bite of his pregnant mother. A born child took the best, from vampires - speed, unrealistic strength and a significant life expectancy, and from a person - immunity to sunlight, the ability to experience a feeling of love and compassion.`,
                `With the help of a special serum that helps to suppress the thirst for blood, Blade does not completely turn into a vampire. From an early age, he was brought up in order to become an adult, to resist and destroy vampires. As night falls, he goes hunting. Blade has an excellent sense of the smell of supernatural creatures such as vampires, masterfully wields his very sharp titanium alloy sword, is armed with a pistol with silver bullets, and is also proficient in martial arts.`,
                `But Blade has a main enemy - the vampire Deacon Frost, who killed his mother during childbirth. Frost planned to subjugate humanity to vampires, because they are weak creatures, just food for the elite community of vampires who have lived for millennia. No one dared to confront Frost, except for the unique warrior Blade, who has his own old scores.`,
            ]
        },
        {
            id: 'ransom-1996', 
            title: 'Ransom',
            year: 2019,
            country: 'USA',
            genres: ['crime', 'thriller'],
            director: 'Ron Howard',
            duration: '2 hours 19 minutes',
            rating: 5,
            image: {
                    image: ransom_1996,
                    alt: 'Ransom' 
            },
			latest: false,
			popular: false,
            description: [
                `In the plot of the crime thriller directed by Ron Howard "Ransom", a successful businessman, airline owner Tom Mullen has reached the cherished heights in his career and in life. He has a wonderful wife, Kate, and a wonderful son, Sean. But one day, the child is kidnapped by unknown people, they demand a ransom of 2 million dollars from the parents, while sending a terrifying video with Sean chained to the bed. Tom turns to the FBI for help, agents monitor all calls and continuously monitor the Mullen house.`,
                `Following the instructions of the criminals, Tom collects money and prepares to hand it over to extortionists, but by chance the deal falls through. While FBI special agents hunt down criminals demanding a ransom, Tom decides to start his game. He goes on TV and offers $4 million for the heads of the blackmailers to whoever finds them and brings his son back alive. The next turn of events is truly unpredictable!`,
            ]
        },
        {
            id: 'silent-hill-2006', 
            title: 'Silent Hill',
            year: 2012,
            country: 'Canada, France, USA',
            genres: ['horror'],
            director: 'Christophe Gans',
            duration: '2 hours 05 minutes',
            rating: 2,
            image: {
                    image: silent_hill_2006,
                    alt: 'Silent Hill' 
            },
			latest: false,
			popular: false,
            description: [
                `The horror film "Silent Hill" is based on the popular Japanese video game of the same name. In the plot of the film, the story of a nine-year-old girl Sharon, who suffers from sleepwalking and repeats the name of some place called Silent Hill in her sleep all the time. The foster mother of the girl Rose tries to help the child and goes with her in search of a mysterious city, hoping that the girl will feel better there.`,
                `Rose's car is being followed by local cop Sybil Bennett, who suspects that Rose is just another psychotic maniac who wants to get rid of a child in an abandoned city. At the entrance to the city, a strange figure appears on the road to avoid a collision, Rose tries to turn off, but the car skids and she, along with a police motorcycle riding behind, gets into an accident. Waking up, Rose does not find Sharon, the girl disappeared in the gloomy, abandoned city of Silent Hill ...`,
            ]
        },
        {
            id: 'the-tuxedo-2002', 
            title: 'The Tuxedo',
            year: 2017,
            country: 'USA',
            genres: ['action', 'comedy'],
            director: 'Kevin Donovan',
            duration: '1 hour 38 minutes',
            rating: 6,
            image: {
                    image: the_tuxedo_2002,
                    alt: 'The Tuxedo' 
            },
			latest: false,
			popular: false,
            description: [
                `Clark Devlin is not an ordinary person, he is a secret agent and performs complex tasks of the government. Jimmy Tong A simple man who works for Clark as his driver. When Clark is in a coma, a brand new tuxedo comes to him, made to order by a secret laboratory. This tuxedo looks ordinary, but it provides its owner with incredible abilities. Now Tongu, an ordinary driver, will have to carry out the task of his master, armed with his tuxedo.`,
            ]
        },
        {
            id: 'the-mist-2007', 
            title: 'The Mist',
            year: 2012,
            country: 'USA',
            genres: ['horror', 'science fiction', 'triller'],
            director: 'Frank Darabont',
            duration: '2 hours 00 minutes',
            rating: 9,
            image: {
                    image: the_mist_2007,
                    alt: 'The Mist' 
            },
			latest: false,
			popular: true,
            description: [
                `The horror film The Mist is an adaptation of the story The Fog by horror master Stephen King. The plot of the film tells how a small provincial town is enveloped in a thick, strange, unnatural white fog. David Drayton, along with his son Billy and neighbor Brent Norton, goes to the supermarket to buy the necessary goods, but the fog quickly descends from the mountains and paralyzes the city, electricity and telephone communications disappear, visibility in the fog is almost zero.`,
                `The visitors of the supermarket decide to stay and wait out this unusual phenomenon, but soon a frightened man runs into the supermarket and terrifies everyone with the news of impending danger. And she did not keep herself waiting long. With the onset of night, terrible creatures began to appear from the mist, breaking windows and shop windows to get to people. But the worst thing began to happen inside the store, human fear pulled out all the ins and outs of people: selfishness, meanness and cruelty growing into real madness.`,
            ]
        },
        {
            id: 'garfield-2004', 
            title: 'Garfield',
            year: 2013,
            country: 'USA',
            genres: ['comedy'],
            director: 'Peter Hewitt',
            duration: '1 hour 20 minutes',
            rating: 2,
            image: {
                    image: garfield_2004,
                    alt: 'Garfield' 
            },
			latest: false,
			popular: false,
            description: [
                `Undoubtedly, this red, fat, lazy and very cynical cat Garfield, from a series of popular comics, is the favorite of all America. However, the matter was not limited to comics and Garfield appeared in a big movie. The plot of the comedy film "Garfield" tells about the cheerful, well-established life of a red-haired fat man in the apartment of his owner, John Arbuckle. Doing nothing and eating lasagna are the cat's favorite things, but Garfield's life cannot be called boring, he constantly manages to get involved in some kind of alterations.`,
                `One day, Jon brings home a cute little puppy, Odie, who disturbs Garfield's quiet life, causing him nothing but trouble. Garfield dreams of only one thing - to get rid of the puppy, but when Odie is stolen by unknown people, for the first time in his life he experiences pangs of conscience and decides to look for a puppy.`,
            ]
        },
        {
            id: 'the-quest-1996', 
            title: 'The Quest',
            year: 2012,
            country: 'Canada, USA',
            genres: ['action', 'adventure'],
            director: 'Jean-Claude Van Damme',
            duration: '1 hour 31 minutes',
            rating: 5,
            image: {
                    image: the_quest_1996,
                    alt: 'The Quest' 
            },
			latest: false,
			popular: true,
            description: [
                `The feature film "The Quest" is the directorial debut of the famous Hollywood actor Jean-Claude Van Damme, who also played the main role in his film. The main events of the film take place in the 1920s. Young scoundrel Christopher Dubois is accustomed to a difficult life in hectic New York. He runs the risk of going to jail every day, but does not agree to work for a local gangster. After stealing money from gangsters, Christopher is forced to seek shelter as far away from New York as possible, so without thinking twice, the guy goes on a sea voyage.`,
                `Ahead of him is waiting for many of the most incredible adventures that Christopher could not even think of. He will have to go through the hard labor of a slave, meet with real pirates, travel to different parts of the world, and also take part in the Gang-geng fighting tournament in the Tibetan Lost City, where the winner will receive a prize in the form of a big dragon made of real gold.`,
            ]
        },
        {
            id: 'the-shadow-1994', 
            title: 'The Shadow',
            year: 2015,
            country: 'USA',
            genres: ['action', 'adventure', 'crime'],
            director: 'Russell Mulcahy',
            duration: '1 hour 48 minutes',
            rating: 7,
            image: {
                    image: the_shadow_1994,
                    alt: 'The Shadow' 
            },
			latest: false,
			popular: false,
            description: [
                `Actions adventure film noir "The Shadow" takes place in the 30s in New York. The crime rate rose strongly due to the massive chaos generated by the Great Depression. Gangsters keep the streets under their control, and their showdowns become more and more violent. It was at this difficult time that an elusive fighter against the underworld appears in the city, who soon becomes a real legend. The shadow helps the police do their job of cleaning the city from crime, and he succeeds perfectly, because for many years a mysterious man in a raincoat and hat studied in a Tibetan monastery, where he learned many secrets of the human mind, and also developed mental abilities.`,
                `However, the charming beauty Margo Lane has telepathic abilities and is a danger to the Shadow, as she easily guesses the course of his thoughts. True, the fragile girl is not as dangerous as the descendant of Genghis Khan Shivan Khan, with the advent of which New York is mired in murders. He has the same techniques as the Shadow, but uses them to subdue the world.`,
            ]
        },
        {
            id: 'the-patriot-2000', 
            title: 'The Patriot',
            year: 2013,
            country: 'Germany, USA',
            genres: ['action', 'drama', 'history'],
            director: 'Roland Emmerich',
            duration: '2 hours 45 minutes',
            rating: 7,
            image: {
                    image: the_patriot_2000,
                    alt: 'The Patriot' 
            },
			latest: false,
			popular: true,
            description: [
                `The historical drama "The Patriot" tells about the times of the war for the independence of the United States from Great Britain, which took place in the 18th century. Benjamin Martin, a valiant veteran with first-hand knowledge of the brutal war, stayed on his farm to raise his seven children during the height of the war. After the death of his wife, Benjamin replaces both mother and father for children, trying to raise worthy people.`,
                `But trouble breaks into the Martins' house, one of Benjamin's sons is killed by an English captain. Then grief, anger and a thirst for revenge pushes his father to the military barricades, where Benjamin becomes the commander of the rebels. He does not spare opponents, he becomes a ruthless executioner for them, and for his people he is a hero, he is a patriot.`,
            ]
        },
        {
            id: 'alien-earths-2009', 
            title: 'Alien Earths',
            year: 2018,
            country: 'USA',
            genres: ['documentary'],
            director: 'Dana Berry',
            duration: '45 minutes',
            rating: 4,
            image: {
                    image: alien_earths_2009,
                    alt: 'Alien Earths' 
            },
			latest: false,
			popular: true,
            description: [
                `Modern scientists continue to explore deep space and make discoveries outside the solar system. The boundless Universe holds many secrets and countless worlds, galaxies, planets and stars. This is what the documentary "Alien Earths" tells about. These unique worlds cannot be described, because humanity has never encountered such discoveries before. They are hidden far in the depths of space, they are not even on the maps. They are mysterious, unpredictable and dangerous in their own way.`,
                `In many years of research, scientists are trying to find planets that would be similar to the Earth, since in the boundless Universe we are not alone. More than ten years ago, after one significant scientific discovery, a long and exciting journey into the bowels of space began in order to search for similar planets. Will the search be successful?`,
            ]
        },
        {
            id: 'cast-away-2000', 
            title: 'Cast Away',
            year: 2014,
            country: 'USA',
            genres: ['adventure', 'drama'],
            director: 'Robert Zemeckis',
            duration: '2 hours 23 minutes',
            rating: 9,
            image: {
                    image: cast_away_2000,
                    alt: 'Cast Away' 
            },
			latest: false,
			popular: true,
            description: [
                `Cast Away is the story of the pedantic FedEx delivery inspector Chuck Noland. He is responsible for international deliveries, his busy schedule is scheduled to the minute and, as usual in life, there is no time left for his beloved and dear people. Together with the team, Chuck flies on a plane to his destination, but as a result of a plane crash, he finds himself on a desert island all alone.`,
                `The time spent on the island becomes for Chuck a kind of period of rethinking of values ​​and his life in general. After the rescue, the hero has to go through a difficult path in the struggle for survival on a desert island. No one suspects how hard and cruel life alone can be.`,
                `The legendary film Cast Away was directed by Robert Zemeckis and was released in 2000. An interesting fact is that the filming of the film was suspended for almost a year to allow Tom Hanks to grow long hair and lose weight.`,
            ]
        },
        {
            id: 'the-prestige-2006', 
            title: 'The Prestige',
            year: 2021,
            country: 'United Kingdom, USA',
            genres: ['detective', 'drama', 'thriller', 'fantasy'],
            director: 'Christopher Nolan',
            duration: '2 hours 05 minutes',
            rating: 9,
            image: {
                    image: the_prestige_2006,
                    alt: 'The Prestige' 
            },
			latest: false,
			popular: true,
            description: [
                `The story of the film "The Prestige" tells about the friendship and enmity of illusionist magicians Alfred and Robert. They were young and inexperienced when their careers began. Improving in their tricks and honing their skills, the followers of Houdini himself began to compete among themselves for the title of the best.`,
                `At the turn of the 19th-20th century, a real war began between friends in London. They are ready to do anything just to find out the secrets of tricks from each other and disrupt performances by exposing the numbers. The struggle has gone so far that in pursuit of glory, the heroes are not afraid to risk their own lives. But honor and their own prestige are above all, even the safety of loved ones does not stop them.`,
                `A gripping plot that takes you to a world of illusions bordering on harsh reality and a brilliant cast: Hugh Jackman, Christian Bale, Scarlett Johansson, all this in the detective fantasy drama The Prestige.`,
            ]
        },
        {
            id: 'mousehunt-1997', 
            title: 'Mousehunt',
            year: 2020,
            country: 'USA',
            genres: ['comedy'],
            director: 'Gore Verbinski',
            duration: '1 hour 38 minutes',
            rating: 3,
            image: {
                    image: mousehunt_1997,
                    alt: 'Mousehunt' 
            },
			latest: false,
			popular: false,
            description: [
                `In the plot of the comedy film "Mousehunt", after the death of their father, the brothers Ernie and Lars Schmuntz inherit an old mansion. Of course, a dilapidated house covered with cobwebs and a thick layer of dust needs a good repair, but who needs it? The brothers are not particularly happy with such an inheritance, but they soon learn that the mansion is the work of a famous architect and is valued at several million dollars.`,
                `Lars and Ernie unanimously decide to sell the house, because the money received will help them solve all the problems. Only selling the mansion is not so easy: it has one small, but very cunning and agile resident in the form of a mouse, which does not want to leave his beloved home at all. This is how the mouse hunt begins, which eventually develops into a real fight for the house.`,
            ]
        },
        {
            id: 'marley-and-me-2008', 
            title: 'Marley & Me',
            year: 2020,
            country: 'USA',
            genres: ['comedy', 'drama', 'melodrama'],
            director: 'David Frankel',
            duration: '1 hour 55 minutes',
            rating: 9,
            image: {
                    image: marley_and_me_2008,
                    alt: 'Marley & Me' 
            },
			latest: false,
			popular: true,
            description: [
                `The plot of the comedy-drama "Marley & Me" tells about a married couple who decided to get a dog and how this dog changed their lives. Newlyweds John and Jenny are getting better, John gets a job as a journalist for a major newspaper, they move into a new house and plan to have children in the future. But first, the couple decides to get a dog, because children are a very big responsibility, there are a lot of troubles and difficulties with them, while you can practice on a dog.`,
                `They buy a Labrador puppy and name him Marley. The kid immediately began to show his mischievous nature by pissing on the floor, chewing on shoes and furniture. Time passes Jenny and John have children, raise them, raise them, and their beloved Marley is always there. The couple could not even think that this dog would change them so much and become the main test in life.`,
            ]
        },
        {
            id: 'the-shallows-2016', 
            title: 'The Shallows',
            year: 2016,
            country: 'USA',
            genres: ['drama', 'thriller'],
            director: 'Jaume Collet-Serra',
            duration: '1 hour 27 minutes',
            rating: 6,
            image: {
                    image: the_shallows_2016,
                    alt: 'The Shallows' 
            },
			latest: false,
			popular: false,
            description: [
                `In her spare time from medical school, student Nancy Adams loves to surf. The search for a secluded place with good waves leads the girl to a gorgeous deserted beach, which her dead mother once told about. This place really turned out to be a real paradise, and the endless ocean gives great waves at high tide, which makes it great to ride the waves.`,
                `It would seem that nothing can overshadow doing what you love, except perhaps an unexpected meeting with a huge white shark, which begins to attack Nancy. The only salvation for the girl is a shallow in the form of a coral reef in the middle of the water. The shore being 200 yards away becomes something unreal, as immersion in water threatens death. However, the tide plunges the shallows into the water more and more, and this does not bode well for Nancy ...`,
            ]
        },
        {
            id: 'bears-2014', 
            title: 'Bears',
            year: 2013,
            country: 'USA',
            genres: ['documentary'],
            director: 'Alastair Fothergill, Keith Scholey',
            duration: '1 hour 17 minutes',
            rating: 4,
            image: {
                    image: bears_2014,
                    alt: 'Bears' 
            },
			latest: false,
			popular: false,
            description: [
                `The documentary "Bears" tells the story of the first years of life of little grizzly bear cubs, whom their mother protects and teaches them all the necessary skills to survive in the wilderness of Alaska. Surrounded by majestic mountain ranges, green meadows, dense forests, lakes and rivers, grizzly bears live. Of course, it is better for a person not to meet this wild animal on his way, but there are many dangers for the bears themselves.`,
                `Together with a mother bear and her cubs, the viewer will make an amazing journey through the picturesque corners of untouched nature, see how a mother takes care of her cubs, takes them out into a big and unknown world, helps them adapt, and also teaches them how to hunt and survive. After a long winter, a family of bears gets out of the den. For kids, this is the first year of life, the first acquaintance with wildlife, the study of an interesting, but also dangerous world around. The cubs have a lot to learn from their experienced mother, because they will soon grow up and face the problems of finding food and competition among their fellows.`,
            ]
        },
        {
            id: '1408-2007', 
            title: '1408',
            year: 2012,
            country: 'USA',
            genres: ['horror', 'thriller'],
            director: 'Mikael Hafstrom',
            duration: '1 hour 44 minutes',
            rating: 5,
            image: {
                    image: movie_1408_2007,
                    alt: '1408' 
            },
			latest: false,
			popular: true,
            description: [
                `A not-so-popular writer, Mike writes stories in the horror genre. All his life he tried to find evidence of the existence of the afterlife, but he never found it. Therefore, he almost does not believe in everything he writes about. Somehow he is given a chance to settle in a hotel in room number 1408, which is famous for the fact that everyone who lived in it died, and those who did not die went crazy talking about some ghosts. Did Mike really want to see what he was so eager to see all his life ...`,
                `The horror film "1408" is based on the novel of the same name by Stephen King. Even depending on who the author is, it's safe to say that the film received a fifty percent head start in its success. This thriller is worth watching for anyone who loves films of such genres as thriller and horror.`,
            ]
        },
        {
            id: 'samsara-2011', 
            title: 'Samsara',
            year: 2015,
            country: 'Indonesia, USA',
            genres: ['documentary'],
            director: 'Ron Fricke',
            duration: '1 hour 39 minutes',
            rating: 8,
            image: {
                    image: samsara_2011,
                    alt: 'Samsara' 
            },
			latest: false,
			popular: true,
            description: [
                `The "Samsara" documentary is a real triumph for cinema, as it was shot entirely on 70mm film, something that almost no filmmaker has done in the last forty years. Translated from Sanskrit, "samsara" means the cycle of birth and death - the wheel of life, repeating innumerable times until the soul finds a path for liberation.`,
                `Filming took place over five years in twenty-five countries around the world. This allows the viewer to take a fascinating journey through the most beautiful and amazing corners of our planet, as well as get acquainted with natural wonders, natural disaster sites and large industrial facilities that reflect modern rhythms and life cycles.`,
            ]
        },
        {
            id: 'escape-plan-2013', 
            title: 'Escape Plan',
            year: 2013,
            country: 'USA',
            genres: ['action', 'detective'],
            director: 'Mikael Hafstrom',
            duration: '1 hour 56 minutes',
            rating: 9,
            image: {
                    image: escape_plan_2013,
                    alt: 'Escape Plan' 
            },
			latest: false,
			popular: true,
            description: [
                `Two real movie legends, two of the coolest action movie actors - Sylvester Stallone and Arnold Schwarzenegger - do not think about retiring at all, but continue to delight fans with their new roles and films. In the plot of the action movie "Escape Plan", a seasoned professional in his field and one of the best specialists in the world, whose profile is the security systems of high-tech buildings and prisons, Ray Breslin can hack into any security system and get out of the most secure prison. Many companies hire him to improve their security systems.`,
                `This type of activity brings Ray a lot of money. One day, Ray receives an offer from a company that is testing a new type of prison. According to the usual plan, he ends up in prison from where he needs to get out. But this time the prison turns out to be very unusual, and there is no contact person in the form of the head of the prison, Roger Marsh, at all. Ray understands that he has fallen into a trap, that someone really wants to get rid of him and now he has the most difficult task of his life!`,
            ]
        },
        {
            id: 'i-know-what-you-did-last-summer-1997', 
            title: 'I Know What You Did Last Summer', 
            year: 2014,
            country: 'USA',
            genres: ['detective', 'horror', 'thriller'],
            director: 'Jim Gillespie',
            duration: '1 hour 40 minutes',
            rating: 8,
            image: {
                image: i_know_what_you_did_last_summer_1997,
                alt: 'I Know What You Did Last Summer' 
            },
			latest: false,
			popular: false,
            description: [
                `Horror-style psychological thriller "I Know What You Did Last Summer" tells about a group of high school graduates who, after a fun party, accidentally run over a man on the road. Evening on the beach, after the long-awaited graduation from school, did not bode well. The two guys and their girlfriends were having fun chatting and having a good time, not without drinking of course.`,
                `Returning home, the guys were driving at high speed and accidentally knocked down an unknown person who suddenly appeared on the road. Ahead of the guys is waiting for a great future, and life is just beginning. To avoid problems with the police and legal proceedings, the guys decide to dispose of the body by dumping it into the ocean. But exactly one year later, one of the girls receives a mysterious note that says in black and white: I know what you did last summer. Someone knows their secret, which means they want retribution.`,
            ]
        },
        {
            id: 'bean-1997', 
            title: 'Bean', 
            year: 2016,
            country: 'United Kingdom, USA',
            genres: ['comedy'],
            director: 'Mel Smith',
            duration: '1 hour 30 minutes',
            rating: 4,
            image: {
                image: bean_1997,
                alt: 'Bean' 
            },
			latest: false,
			popular: true,
            description: [
                `After the British comedy television series about the walking disaster Mr. Bean, beloved by many viewers, the filmmakers decided to make a full-length film about the adventures of this unique, little-speaking person. Mr Bean is a curator at the Royal British Gallery of Art. The authorities would have fired him long ago, but the director instead sends Bean on a business trip to Los Angeles, where he is mistaken for an important person who arrived at the opening of the exhibition.`,
                `Mr. Bean stops at the home of an employee of the Los Angeles gallery, David Langley, and then the adventure begins. In an art gallery, he manages to ruin a famous multi-million dollar painting by an American artist called Portrait of My Mother, go to the police station, pretend to be a surgeon and perform an operation, and inflict irreparable psychological trauma on the Langley family. All this can only be done by the walking disaster Mr. Bean.`,
            ]
        },
        {
            id: 'interstellar-2014', 
            title: 'Interstellar', 
            year: 2014,
            country: 'United Kingdom, USA',
            genres: ['adventure', 'drama', 'science fiction'],
            director: 'Christopher Nolan',
            duration: '2 hours 49 minutes',
            rating: 9,
            image: {
                image: interstellar_2014,
                alt: 'Interstellar' 
            },
			latest: false,
			popular: true,
            description: [
                `Eminent director Christopher Nolan has given the world many incredible films and continues to amaze the audience with his new works, which instantly beat all the ratings. The director's new work is the sci-fi film "Interstellar", based on the research of the American theoretical physicist and astronomer Kip Thorne. The plot of the film tells about difficult times for mankind, when a terrible drought hit the planet, depriving people of farming activities. Drought and fires have led to a food crisis, and humanity faces a painful extinction from hunger.`,
                `Scientists make a shocking admission that the world cannot be saved, but it is possible to leave it. For space travel through a space-time tunnel, which can supposedly help conquer a huge distance and find a new planet for life, a group of researchers was selected. It included a talented engineer and an excellent pilot Cooper, who dreams of saving his children, so he is ready to do everything to return back.`,
            ]
        },
    ];

    const date = useMemo(() => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const month = (new Date).getMonth();
        const day = (new Date).getDate();
        const year = (new Date).getFullYear();

        return `${months[month]} ${day}, ${year}`;  
    }, []);

    localStorage.setItem('date', date);
    const storedDate = localStorage.getItem('date');

    const news = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae fugit inventore facilis dignissimos neque harum, itaque voluptas cumque iste vel, eos exercitationem perspiciatis! Eius, provident ut, similique repudiandae beatae repellat architecto aut dolores necessitatibus velit aspernatur. Obcaecati nisi eum architecto repellendus veniam facere similique, quo porro explicabo quisquam iure esse recusandae doloribus exercitationem accusamus maiores. Quod reprehenderit quisquam, est assumenda officiis commodi nam ut tempore praesentium laudantium quasi quas magnam qui. Fugiat ipsa atque fuga rerum cum in architecto quisquam, magnam incidunt fugit iste perferendis suscipit asperiores repudiandae qui aperiam deserunt et eum odio, dicta saepe dolores nostrum. Ut necessitatibus suscipit delectus quis nihil esse a commodi, fugiat facere aspernatur recusandae assumenda dolore quo ipsum error dolorem optio illum vel repellendus nulla quia eos quam. Totam dolor at, tempore aperiam itaque illo labore id sequi perferendis ipsa. Qui, dicta voluptas! Magnam labore mollitia, possimus enim illo magni distinctio aliquam animi fugiat nulla ratione assumenda totam ut dolore laboriosam, tempore ducimus modi consequatur. Omnis esse enim minus odio quasi nemo recusandae numquam delectus. Ullam, sit minima quae quasi itaque eveniet quibusdam, possimus ratione dicta dolores eos consequatur labore ipsum quas praesentium, nemo optio! Impedit quas maxime voluptatum enim, laborum saepe veniam doloremque nisi aperiam, aliquid tempora repellendus eligendi, expedita non perferendis illum quibusdam nemo? Repudiandae quibusdam nisi ab dolorem iste voluptates hic, perferendis at suscipit autem officiis veniam libero atque eaque aperiam laborum adipisci esse modi laboriosam repellat excepturi placeat? Asperiores quasi nisi ullam esse quas. Quaerat doloribus, recusandae velit distinctio iste assumenda. Veniam, modi ipsam voluptatem recusandae commodi cum assumenda perferendis quos excepturi sed eius earum. Illum cum nemo voluptatem repellendus quaerat, amet beatae quod voluptatum provident! Architecto modi amet nostrum vero corporis accusamus atque? Doloribus vero esse quod consequuntur repellendus amet culpa dolore ducimus quia suscipit? Odio officia quod error asperiores cupiditate dolorum, iste assumenda fugit sequi impedit explicabo perspiciatis. Expedita debitis quia cupiditate excepturi alias dolore perferendis nulla consequatur, quisquam fuga iure maxime doloremque assumenda dolorem quaerat! Explicabo nemo, eaque tenetur quae quam impedit provident quisquam placeat, exercitationem ab dolorem? Nemo nostrum voluptates veritatis optio odit quasi, minima facere. Eaque mollitia amet, blanditiis ipsam, necessitatibus cumque vitae debitis porro ut culpa, eveniet repellendus quisquam officia. Facere, optio autem. Harum inventore modi molestias cumque porro perspiciatis minus eveniet, doloremque nam accusantium reiciendis, facilis voluptatem vero libero. Voluptatibus aperiam beatae debitis veritatis quisquam repudiandae labore! Velit blanditiis ea, earum corporis perspiciatis esse, adipisci sed ipsum alias magnam molestias aut iste atque iure mollitia inventore? Voluptatibus explicabo inventore optio placeat, quod ut expedita laborum rem, doloribus, reprehenderit distinctio? Voluptatibus iste, nam, reiciendis cupiditate debitis ducimus eaque magni possimus cum aliquid consequatur. Commodi ipsa, optio nesciunt voluptatum laborum vitae ad nostrum recusandae minima numquam ullam distinctio praesentium culpa totam dolorem. Adipisci enim provident voluptatem officia dolore, tempore facilis quas, sit iure id sapiente reprehenderit eum soluta quia. Vel perferendis aliquid voluptates numquam libero placeat eius vitae amet hic dolores corporis, modi quod tempore distinctio laudantium, qui incidunt similique voluptatibus deserunt! Labore error odit aspernatur. Quam iure neque dicta temporibus, ipsam ad numquam odio quaerat quia porro odit aperiam iusto consequatur corrupti eum nisi earum pariatur mollitia? Inventore nihil dolores similique laudantium, tempore suscipit aut amet minima aliquid odio alias est fugiat libero reiciendis ea nam distinctio fuga sit modi aperiam harum velit voluptates corrupti necessitatibus. Porro sit accusantium dicta sapiente! Nam, dicta quam iure temporibus consequatur officia. Laborum magni enim aliquam hic fugit vero amet suscipit molestias, quia repellat quae unde optio eligendi eius ullam dicta eveniet. Error, consectetur at eveniet tempore impedit ipsam omnis nesciunt a porro rerum libero id deleniti excepturi aspernatur, eligendi doloribus. Iure, est delectus odit dolorem dicta aspernatur necessitatibus molestiae atque ab nemo cupiditate, culpa veritatis consequuntur facere et nobis ipsam sunt ullam officiis consectetur commodi quod blanditiis voluptatibus debitis? Accusantium perferendis iure fugiat explicabo sint excepturi similique ipsum sapiente numquam. Minus, molestiae? Temporibus enim aspernatur a dolorum ex quae, quod accusantium unde aliquid eos, ad vitae molestiae eius magni harum ducimus asperiores adipisci quo esse nisi labore earum exercitationem. Ea sit sapiente corrupti ratione mollitia consequatur vel ipsum dolore ipsam cum voluptatibus, totam blanditiis ullam eligendi, ipsa amet quasi deserunt quisquam! Delectus ratione sint ducimus molestiae, velit consectetur corporis quisquam sapiente, quae est eos eveniet temporibus culpa obcaecati eius porro perspiciatis adipisci consequatur dolore deserunt voluptate. Vel, provident doloremque! Fugiat dolores blanditiis ea perspiciatis eaque! Hic sequi similique iure odit magni asperiores error suscipit cumque porro voluptatibus amet placeat natus veniam, perspiciatis eos non provident assumenda est sint! Tempore delectus corrupti debitis incidunt odio illum magni, ipsam doloribus autem unde eligendi voluptates assumenda, optio fugiat veritatis perspiciatis voluptas! Hic nobis alias deserunt reiciendis doloribus debitis autem, suscipit et, iure soluta pariatur deleniti voluptatum! Necessitatibus, quibusdam. Non sequi dicta odio totam, ex id! Quia nobis ullam labore magnam cum placeat reiciendis ad? Architecto deserunt, cumque nulla soluta laudantium nihil. Recusandae ex possimus iusto dignissimos nemo suscipit impedit consectetur assumenda? Odit corrupti dolorum praesentium fugit saepe autem numquam pariatur! Ipsa nulla non atque libero ea voluptate consectetur voluptatum repellendus laboriosam voluptatibus unde, beatae quaerat reiciendis inventore, officiis delectus. Fuga harum nam, cumque inventore debitis eos quis. Alias repellendus minima maxime! Pariatur aliquam ipsum hic eum eligendi repudiandae nobis delectus doloremque architecto expedita esse ipsa quasi odit ex exercitationem quae libero nulla debitis, ab suscipit. Perferendis corrupti repellendus sit laboriosam mollitia, fuga porro officia tempore inventore, temporibus consectetur, ex voluptatum optio maiores. Asperiores ducimus veritatis nobis sint voluptatem esse officia magni corrupti, deleniti, exercitationem vitae? Enim error quos cum aspernatur ea repellendus eius soluta sapiente facere numquam autem similique animi fugiat quam impedit unde ab rerum, nemo eos maxime eaque repudiandae explicabo tempora earum. Nam tempore molestiae ipsam. In, odit quod? Omnis praesentium non autem excepturi, iste possimus magnam rerum consequuntur est sed. Maxime minus facilis veniam odio doloremque at, cumque, maiores commodi excepturi provident praesentium. Ipsam, possimus! Officiis porro delectus inventore iusto, commodi tempore voluptatum accusamus rem quae obcaecati voluptas ipsa est fugiat aperiam possimus asperiores earum!',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor amet consectetur elit Tempore, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore quae rerum labore culpa enim harum, dolorum laboriosam itaque officiis reiciendis, neque dolorem adipisci repudiandae impedit praesentium fugiat minus ipsa doloribus. Voluptatibus adipisci omnis repudiandae impedit eligendi inventore natus beatae unde? Fuga maxime temporibus officiis facilis repellendus neque eaque tempora nisi, dolores consequuntur quas quidem numquam expedita? A, ipsam! Porro voluptates assumenda saepe! Recusandae dolores, at obcaecati aliquam modi libero architecto fugiat voluptate nam mollitia. Amet animi id, nostrum nesciunt veniam quidem aspernatur optio fugit velit debitis exercitationem architecto consequuntur vel, et odio voluptas tempora delectus ipsa reprehenderit iste. Sequi excepturi blanditiis ratione rerum omnis tempore ullam eos eveniet, laboriosam corporis eligendi sapiente repellat quod molestiae numquam iure quo nulla minima adipisci, itaque ipsa! Facilis explicabo sequi tempora nam consectetur provident harum beatae nisi ad voluptatibus similique, sed dicta cupiditate molestias iure odit impedit nihil? Temporibus sapiente explicabo reiciendis, dicta porro iure necessitatibus vero ducimus omnis quas? Quia natus voluptatibus consequatur quas neque, ipsam fuga voluptatum exercitationem nostrum autem eius deserunt, quos ducimus modi ea? Eos rem dignissimos et ad pariatur. Et accusantium, non nesciunt a beatae, dolor consequatur voluptatem autem molestias veniam, reprehenderit illum dicta impedit sed libero pariatur modi in qui laborum debitis esse ab. Alias quis nihil maiores sint aperiam maxime quas reprehenderit quod nulla natus, minima provident cum atque. Delectus porro distinctio aperiam sit excepturi, ut, exercitationem vero ipsa perspiciatis enim, ab fuga est! Quisquam sint suscipit et possimus deleniti, ipsam distinctio a cum adipisci quod totam quam voluptatibus eum repellendus! Quia, reiciendis? Quisquam rem a nam dolore, nulla eaque mollitia itaque, aliquam pariatur labore architecto quas praesentium cupiditate! Ea, sed atque! Illo, adipisci magnam quam eos autem quaerat eius ab? Accusamus expedita perferendis ex sunt, iste dolore. Vel libero temporibus sint aperiam adipisci deleniti laboriosam, beatae architecto incidunt facilis minima ab corrupti ad fuga cumque omnis sed odit necessitatibus ipsa eaque velit cum! Molestiae optio fuga eos repudiandae ipsum quaerat harum distinctio et tenetur, laudantium dicta ex minus aliquid! Culpa corrupti rem, quas fuga ipsum quod! Tempora error quisquam corrupti cumque eligendi inventore consequuntur sint quis nihil culpa debitis rem nemo ducimus, ex dolorem, quae molestias blanditiis quidem ipsum expedita! Consequatur ducimus saepe modi obcaecati sunt eligendi quis in consequuntur voluptatum voluptas dolorum corporis officia tenetur hic, ullam inventore iste temporibus nesciunt animi ad natus consectetur ut possimus quasi! Eveniet enim neque debitis voluptate ex suscipit delectus. Ipsam, unde expedita odit, consequatur error aperiam quaerat autem deserunt neque dolore vitae consectetur laudantium molestiae? Dolore fugit ab sit modi ipsum optio nostrum cumque perspiciatis quam molestias reprehenderit accusamus neque, quos saepe, earum recusandae illum doloremque. Ea modi molestiae unde inventore reiciendis ducimus et distinctio facilis esse repellat blanditiis eius explicabo provident nesciunt sapiente veniam rem similique, odio laboriosam fugiat. Doloribus nihil voluptas maxime ut officiis nam nulla vitae tempore quo harum illo eum quas repellat, architecto sit quidem consectetur provident labore deleniti numquam debitis illum libero odit! Officiis, illo exercitationem! Vitae esse repellendus dolores consequatur ipsum, dignissimos sapiente tenetur, perspiciatis tempore possimus laborum provident dicta. Esse adipisci sed neque, porro rem placeat ad quos voluptas eligendi minus voluptates est assumenda illo quibusdam, at suscipit distinctio veniam sunt maiores facere voluptatum molestias. Architecto expedita inventore fugiat quo voluptatum aperiam, officia quidem vero repellat voluptas, laboriosam tempora, possimus provident dolore ipsum autem libero dolorum? Repudiandae assumenda laborum velit, saepe cum aspernatur repellat autem expedita repellendus voluptatem at. Hic magnam natus ratione eos facilis inventore temporibus pariatur fugit deserunt, repellendus expedita soluta, sit, nihil facere! Dolore reiciendis, porro a, perspiciatis numquam culpa exercitationem aut, corrupti voluptatem eius neque debitis.',
            featured: false
        },
        { 
            title: 'Lorem dolor sit amet consectetur adipisicing elit, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias expedita necessitatibus, mollitia quia a facilis voluptates est iure. Impedit nulla eveniet sequi quae! Accusantium eos minima suscipit at similique vel ducimus pariatur illum, unde eveniet vitae quasi atque quae, quos alias quam asperiores vero tempora sequi. Necessitatibus debitis, similique consectetur asperiores ipsum quod nesciunt, neque maxime nemo eos obcaecati. Dolor maiores adipisci sint praesentium debitis ratione blanditiis, labore at natus, velit recusandae explicabo voluptatem, hic dignissimos asperiores sit ipsum odit. Consequatur velit, sit beatae possimus quod unde error eos ipsa quisquam quos voluptatum ipsum cupiditate, dolores commodi id repudiandae ex aliquid omnis eum explicabo similique suscipit nobis! Aut officia officiis quaerat aspernatur, cupiditate perspiciatis commodi perferendis excepturi, quam pariatur quod similique. Sequi delectus nobis facere minus reiciendis esse eligendi dolore nostrum amet error? Minima fugiat aut distinctio! Accusamus labore temporibus, aliquid nobis vero totam tenetur. Id veniam deleniti, dolores vel sunt quas illo esse mollitia. Ea quam fugiat nostrum, amet aliquid, sint enim sapiente vitae aliquam fuga impedit dolorum debitis reiciendis autem facere molestiae? Praesentium eveniet repellendus minima amet dolore nihil ut harum placeat minus doloremque, accusantium dignissimos inventore consequatur voluptate deserunt sunt, rem tempora aspernatur odit est obcaecati optio aliquid culpa! Neque veniam nam modi amet quibusdam, enim molestiae, itaque et illo, dolor est velit harum tempora! Repellat fugiat animi delectus totam iste sequi laboriosam illo aspernatur obcaecati officia, unde praesentium ipsum tenetur numquam a blanditiis exercitationem expedita nulla, natus odio! Rem earum modi ratione odit soluta dolor, ad unde tempore deleniti? Tempore doloremque eius consequuntur dolorem? Voluptate nam eum deleniti et sit maiores explicabo praesentium doloribus optio, velit commodi dicta quidem non alias ea aut, voluptatum fuga eos perspiciatis facilis possimus. Quo illum a minima, numquam ea aperiam sequi laborum voluptate nulla fuga quaerat. Quibusdam, veniam iure, repellendus suscipit voluptates, at animi voluptatibus veritatis facere inventore natus ipsum pariatur sint id ipsa impedit molestias modi sequi quidem nulla nostrum numquam voluptas? Expedita accusamus ad esse assumenda tenetur consequuntur possimus voluptatibus aperiam sint aspernatur dolorem reiciendis pariatur, quas perspiciatis id ex! Corporis, nisi qui. Maiores ipsum doloremque error quisquam quo nulla perspiciatis adipisci cupiditate obcaecati, laudantium harum animi inventore? Quaerat repudiandae explicabo facilis illum magnam quidem iure rerum soluta blanditiis laborum hic accusamus rem sit sed doloribus minima tempore nesciunt cupiditate laudantium, magni voluptatem sequi obcaecati! Sequi architecto vero pariatur perspiciatis obcaecati dolores nemo magni assumenda perferendis aperiam, deleniti et asperiores animi similique vel quos modi rerum! Assumenda praesentium officiis facere atque tenetur consectetur consequuntur maxime necessitatibus, sint pariatur nisi asperiores nemo delectus! Soluta dolorem recusandae ab ea minus tenetur officia quia sed hic! Eveniet impedit iure fugiat doloremque minus, incidunt maxime veritatis, accusamus tempora natus nobis ab autem adipisci exercitationem esse perspiciatis a sit quae porro officiis hic perferendis illum! Commodi eveniet enim quibusdam dolor cumque rem et dignissimos minima vel aliquid quam impedit itaque nihil neque doloribus, aliquam in sit ducimus mollitia error accusantium amet blanditiis? Ullam iure vitae ipsum minima accusamus rem, minus obcaecati incidunt, enim, est sapiente officia adipisci vel nesciunt placeat non possimus accusantium maiores earum quisquam? Recusandae dolores corporis amet porro numquam dolorum aliquid fuga accusamus tenetur adipisci hic incidunt iusto excepturi ullam, saepe optio pariatur vitae ea aspernatur magni consequatur ad quo possimus tempora. Maiores libero quibusdam modi dolor eum at animi harum eos, quam impedit dicta pariatur sapiente dolores. Sint provident quis officiis? Amet repellendus suscipit veniam pariatur maxime quas cupiditate, eius repudiandae, molestias ea dolor sapiente cumque ratione ullam libero ipsum illo asperiores. Obcaecati velit ipsa quis accusantium dolore maiores distinctio quibusdam placeat voluptatum ad. Inventore molestias distinctio veritatis facilis in nemo! Id voluptatem, aspernatur placeat asperiores eius cumque distinctio? Ipsa officia in impedit ab cupiditate magnam, itaque suscipit, dolorem placeat saepe optio assumenda. Ipsa corporis soluta modi doloremque nulla voluptate pariatur dolores quos adipisci? Deleniti nostrum iusto, repudiandae qui sint ratione tenetur recusandae architecto illum nisi? Itaque quas cupiditate temporibus modi assumenda omnis molestias eius earum nulla quos, sit cumque doloremque corporis incidunt dolores doloribus quibusdam voluptatum quis hic est facere cum! Optio, ab consequatur nostrum quisquam, totam nesciunt est perspiciatis iure cum mollitia ad earum pariatur dolorum repellendus repellat sit aut eveniet, vero delectus rem tempore consequuntur blanditiis minima. Saepe maxime eaque ipsa suscipit voluptatem sint nesciunt nostrum amet iure vel, nemo optio accusantium dolore quaerat consectetur ut eos possimus blanditiis? Veritatis ipsa facilis dolorum magnam quam unde placeat repellat numquam nesciunt ea omnis distinctio velit sit quisquam perspiciatis eius, beatae excepturi saepe error ullam laudantium necessitatibus! Eligendi, tempora id fuga ipsa nostrum cumque, sint nam officiis neque natus veritatis architecto quae necessitatibus accusantium commodi eos dolore provident quidem modi laboriosam! Facere officiis itaque voluptates labore porro libero rem, recusandae et consequuntur accusamus voluptate dolore perspiciatis error doloribus. Laborum hic pariatur in, nemo quae odio veritatis facere.',
            featured: true
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing elit Tempore, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint modi non, magni veniam accusantium voluptates recusandae, error commodi eveniet et. Rerum natus delectus iste laborum sit et. Vitae nobis laborum cupiditate beatae, harum officia vel sit porro explicabo praesentium doloribus fugit a, eveniet, ratione ullam. Debitis ullam iste nobis odio architecto perspiciatis dolores ea dolorum voluptate culpa! Necessitatibus ab iure omnis, placeat, ratione laborum eum dolorum mollitia maxime pariatur, possimus molestiae. Cumque, itaque et. Modi incidunt quaerat pariatur excepturi. Blanditiis delectus quos sequi, nihil earum numquam nisi magni sed deleniti, sapiente dolore provident veniam eaque quia libero alias illo, commodi exercitationem accusantium explicabo vero! Quam velit cumque quaerat quibusdam a voluptate, repudiandae ab earum quos est ducimus eligendi ullam obcaecati vitae. Nihil delectus praesentium itaque expedita placeat cupiditate? Quaerat doloribus dolores repellat laudantium, labore facere soluta aliquid nisi sapiente numquam animi, facilis autem omnis ullam est earum recusandae quae exercitationem cumque asperiores. Recusandae doloremque accusantium iusto mollitia tenetur sed ea nostrum, debitis illo porro, nobis nemo eum in! Neque officiis maiores earum corrupti rem doloribus sit dolorem rerum dolorum, ea dicta voluptatibus nesciunt itaque non adipisci provident eveniet debitis laudantium quia optio magni! Suscipit, nam earum eius reiciendis quod vero repudiandae! Ipsum eveniet at, dignissimos quas atque, perferendis facilis sequi impedit fuga optio laborum doloremque sit eius amet enim rem natus possimus vero. Commodi consequuntur sunt aut non sed ut nihil facilis cupiditate, tempore voluptatibus unde nostrum. Error reprehenderit at, laudantium sed inventore itaque eum incidunt repellat eligendi porro molestias quibusdam, amet laboriosam ab dignissimos consequatur magnam cupiditate quam, quasi veniam harum impedit! Animi qui recusandae autem sint odit magni dolorem consectetur voluptatum voluptates delectus perspiciatis culpa iste suscipit voluptatem sit possimus in incidunt neque, ipsum, a esse soluta vitae. Suscipit similique, libero facilis porro expedita architecto ratione est, at deserunt quibusdam nisi perferendis quidem ipsa tempora deleniti dolore vitae ea laudantium! Pariatur natus incidunt repudiandae, sequi minus in omnis aspernatur reprehenderit placeat enim repellendus quasi perspiciatis sint nulla maiores doloremque optio cupiditate nihil eligendi doloribus magnam iusto tempore nostrum labore. Distinctio quas sit provident reprehenderit repudiandae cupiditate similique porro quasi? Quos, ullam? Delectus et, non inventore saepe dicta quia aperiam tempore ab quasi aliquam quaerat cum facilis numquam obcaecati, nobis beatae. Exercitationem, pariatur dicta repellendus corporis distinctio quam placeat doloremque nihil, perspiciatis voluptas magni dolorum reprehenderit totam est? Vel quo ex ad laudantium eveniet incidunt inventore dolor aliquam, accusamus repellat beatae veniam voluptate impedit labore sequi quis nostrum deserunt magnam exercitationem id expedita? Corporis nisi sapiente molestiae ut laudantium exercitationem excepturi fugit expedita, maxime sunt cumque quibusdam et ratione nam, eveniet placeat! Numquam maiores exercitationem fugit! Laboriosam eaque dignissimos, quidem veniam eius ab similique sequi architecto, recusandae dolorum in mollitia. Soluta voluptatibus officiis illo necessitatibus placeat totam iure temporibus dolorem, vero natus minus asperiores rem porro cumque eligendi, obcaecati voluptate voluptatem sit dolore dolorum sequi quae perspiciatis. Quo fuga ducimus, commodi voluptatibus laborum dolor. In nobis aspernatur iure ipsum quo aut? Iste repudiandae autem provident pariatur reprehenderit maiores perspiciatis in asperiores minima. Eaque at sit, consequuntur cupiditate dicta veritatis labore nesciunt ratione aperiam perspiciatis suscipit dolor vero? Enim tenetur nostrum, quis reiciendis voluptatum nisi. Laudantium voluptatem enim odio tempore iste est pariatur recusandae autem iusto minima nobis at doloribus atque quam, delectus illo dolores placeat ab accusantium in soluta sequi inventore. Possimus maxime itaque accusamus delectus illo consectetur magnam ullam eaque adipisci aut autem sequi soluta neque voluptatum molestiae, provident, omnis deserunt unde distinctio inventore nesciunt perferendis minus veritatis. Minus ea cum, sint excepturi et inventore architecto optio modi id sed animi itaque doloremque fugit exercitationem maiores voluptatem harum, ad nihil! Accusantium tempora animi nihil incidunt earum. Vel rem ad quis dolor quae mollitia incidunt a maiores tenetur consequuntur, illo perspiciatis similique error molestias dicta, autem animi accusantium quas excepturi harum. Ut est nesciunt veniam saepe repellat exercitationem perferendis doloremque aspernatur quod quibusdam fugit culpa libero, quisquam distinctio sed nobis illum quae vitae in, iure, facere id atque consequatur! Earum enim velit illum, distinctio itaque error recusandae facere iure. Quo aliquid, magnam nam praesentium voluptatibus quas a quis placeat repudiandae eius veniam voluptas dolorum ut itaque voluptate vitae laboriosam odio mollitia. Quaerat possimus perferendis quae ut. Adipisci sequi perspiciatis ab placeat aliquid deleniti pariatur dolorum cum exercitationem voluptatem. Qui voluptas accusamus ullam eveniet, voluptatum, sunt aliquid, perferendis quisquam illum a sint facere? Ex ducimus perspiciatis blanditiis a molestiae. Quas explicabo obcaecati tenetur ullam suscipit unde illo voluptates iusto! Quas laudantium porro nobis esse est dolorem repellendus ipsum facilis ipsam impedit labore numquam, corrupti laboriosam nisi. Iure assumenda aperiam culpa sint odit accusamus accusantium eius reprehenderit dolor sequi perferendis dolore similique aliquam animi ipsa illo, beatae ducimus, officia nobis odio nostrum rem doloribus cupiditate? Reiciendis possimus numquam repellat placeat quia unde quidem at ipsam eius atque voluptatum veniam nostrum esse aliquid commodi qui deserunt quas, porro maiores fugiat doloremque cupiditate laudantium pariatur facere. Nihil laboriosam dolore impedit beatae. Unde voluptates voluptatum possimus adipisci. Quos, quisquam, quam rem voluptatum corrupti fuga deserunt voluptas necessitatibus, provident nesciunt molestias! Ea velit fugit itaque aspernatur, aliquid eum, non veniam officiis nulla ipsum laborum, amet natus ad assumenda? Adipisci neque beatae placeat earum commodi, facilis molestiae perferendis fugit! Tempore, reprehenderit sint. Quos autem magni ullam neque, consequatur accusamus incidunt ratione officiis atque libero recusandae facilis corporis dolorem, voluptas sed ea. Laudantium inventore laboriosam impedit et temporibus id, sequi facilis ad beatae officia ducimus eos aut maiores consequatur nemo sapiente quasi soluta minima, tempora ex dolore odio! Quas perspiciatis exercitationem perferendis, tempora, quam dolorem esse obcaecati itaque nisi repellendus cum maxime hic id voluptas harum labore aliquam qui commodi fugiat, cupiditate quod ab excepturi velit? Debitis omnis fuga accusamus earum repellendus repudiandae labore illo temporibus?',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing elit Tempore, provident amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis accusantium iusto dolore cupiditate rem unde ipsum delectus dolorem quos provident molestias dicta quis harum, atque eos debitis quo laborum rerum exercitationem ad in sed quibusdam. Praesentium quis fuga voluptate quas, assumenda pariatur tempora nam animi enim dolorem ad veniam eveniet, non sit, consequuntur perferendis beatae culpa id ipsum harum. Sed dolores accusamus aliquam error deserunt adipisci consectetur, assumenda delectus. Excepturi fugit quidem asperiores laborum suscipit eligendi molestiae commodi molestias enim? Esse nihil doloremque beatae quod! Accusantium dolorum numquam consequatur quibusdam odit adipisci aspernatur veritatis quaerat atque. Ipsum quae non, sed consequuntur ipsam unde, ducimus voluptatem doloribus rerum vitae nihil animi voluptatum corporis ea culpa nemo soluta amet perferendis dolores illo assumenda tempora molestiae? Eum alias illo doloremque qui architecto nisi facilis voluptatibus quaerat quis, harum atque unde nihil vero. Iure voluptates eveniet provident explicabo necessitatibus iusto et exercitationem eos totam, reiciendis blanditiis molestias maxime, enim, porro est ea asperiores! Enim repellendus voluptatibus eum saepe culpa sequi sed ullam expedita, quidem excepturi aspernatur aperiam modi ex commodi voluptate alias dolor voluptates temporibus voluptas quis. Expedita, fugiat, minus impedit corrupti aliquid in sunt at quas voluptate vel facilis illo animi ducimus! Molestiae eius tenetur, laboriosam in voluptatibus iste, reprehenderit et cupiditate rem pariatur a quae sequi totam? Adipisci pariatur eos cupiditate? Ducimus accusamus voluptatem repudiandae maxime quidem tenetur qui magnam, recusandae tempore ab pariatur. Nisi repellendus consequuntur aliquam, dolor porro dolorum quidem excepturi laboriosam magnam tempore at neque. Sint doloribus impedit consequatur repellat provident? Aut magnam, ratione possimus voluptatem assumenda quo sapiente nemo? Facilis in, fuga quam molestias delectus ratione quis error consequuntur numquam illo asperiores aut voluptatem ex deleniti, quidem labore dignissimos maiores nobis porro, totam accusamus ducimus et iste minima! Consequatur explicabo dignissimos necessitatibus asperiores voluptates labore voluptas deserunt nostrum, quisquam aut commodi cum ducimus iste vel voluptatibus tempore! Molestias sequi dolores officia suscipit aliquid. Temporibus voluptate vel tempora maxime est, officiis veritatis? Laboriosam id vel, adipisci dolorum sint tempora fuga molestiae? Explicabo possimus porro quia cupiditate minus saepe expedita, earum reprehenderit id iure omnis quidem accusantium dolor aliquam asperiores quisquam. Quos suscipit voluptate voluptas vero officia? Dolorum ipsum totam rem eum culpa libero labore debitis consequatur est ea laboriosam laudantium atque minima numquam consequuntur optio aut facilis beatae, suscipit impedit dolorem, ex iusto. Iusto placeat, praesentium iure sunt ducimus quasi nam magnam vitae nisi. Vero sit fugit ipsum? Ipsam illum, deleniti nulla, nam excepturi nostrum nesciunt voluptatum ut similique saepe, iusto consequuntur natus eaque vitae commodi quae sit distinctio facilis? Nihil iste laborum dolore ipsam ratione. Quo, sapiente ad debitis possimus in consequatur soluta facilis fugiat dolorem. Minus quis ipsa, aperiam modi voluptate tempore laudantium id sit? Saepe earum reiciendis nesciunt sit molestias provident adipisci nostrum mollitia doloremque nam deleniti rem repudiandae aperiam, neque atque repellendus at totam distinctio beatae aliquam id? Accusantium sequi numquam qui placeat fuga possimus eius voluptatem quia fugit in porro, saepe, soluta dolorum ad aspernatur reiciendis deleniti, recusandae laboriosam labore. Quam illum, atque dolorem velit temporibus eius quos aut maxime, ad, dolor possimus! Ut qui corporis dolor perferendis eos ea eaque assumenda adipisci. Eos dolore architecto debitis sunt non ullam odio, illum exercitationem doloremque, harum provident! Autem iste, et asperiores cumque accusantium omnis ratione eos vero cupiditate accusamus officiis eum, fugiat quisquam corrupti sit eligendi quae aliquam nihil hic tempora provident ipsum! Sed mollitia, fuga cupiditate distinctio pariatur hic alias incidunt minima ullam sequi at quam, facere inventore omnis repudiandae delectus assumenda quasi reprehenderit blanditiis obcaecati, iure sit tempora est sint! Ab facilis magni beatae! Soluta doloremque consequatur iste ipsam omnis optio deleniti provident perferendis, dolores voluptate mollitia sit deserunt officia in accusantium reiciendis quaerat dolor reprehenderit voluptatibus ducimus numquam laborum? Quas nemo maiores corrupti ut fuga laudantium, inventore dolorem porro consequuntur, illo officiis nesciunt neque sequi modi amet? Obcaecati incidunt omnis fuga quibusdam magnam. Maxime alias ut omnis inventore natus minus, repellat, doloribus quam molestiae aspernatur itaque rem facilis voluptatem voluptas. Illum rerum molestias, saepe, omnis quam eveniet aperiam ab deserunt molestiae ex natus dolore praesentium obcaecati sit porro debitis. In accusantium inventore, consequatur placeat repellat expedita? Nostrum qui laborum quae laudantium. Impedit voluptatibus repudiandae, dolor aliquid, fuga dignissimos veniam officia commodi nobis, iure illo odit perferendis numquam animi perspiciatis nam dicta omnis cumque modi doloremque. Quidem eos enim odit sit cumque facere, impedit quas neque tempore, ab, provident quibusdam explicabo veritatis maxime cupiditate at rerum laboriosam doloremque ipsa porro atque praesentium perspiciatis laudantium. Nulla, optio! Quasi eos veritatis labore iusto sapiente quisquam blanditiis earum sequi doloribus in, dolore atque exercitationem, quas quae illo autem molestias error incidunt optio. Incidunt voluptatem aut nihil odit accusamus exercitationem reiciendis cupiditate vel sed ratione quam molestias, eum beatae eius eaque placeat. Fuga, atque iste eaque dolores accusamus modi. Consequuntur voluptas odio inventore culpa quisquam maxime eveniet, laboriosam nemo at minima esse veniam ea officia beatae ex harum amet vero debitis quia commodi perferendis nam maiores provident? Repudiandae esse aperiam pariatur quidem illo doloremque eius molestiae quaerat sunt voluptatum hic molestias delectus, omnis explicabo accusamus laboriosam ratione repellat ducimus natus non qui sequi inventore saepe placeat.',
            featured: true
        },
        {
            title: 'Lorem dolor sit amet lorem impsum elit Tempore, provident elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            }, 
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque possimus ipsum neque accusamus illo harum inventore vero, deserunt molestias excepturi accusantium dolorem? Tenetur illum fugit, dolores similique, commodi officia, unde cumque modi accusantium ipsum voluptatem placeat obcaecati exercitationem quos molestiae in adipisci aliquam minus porro autem dignissimos! Nobis eligendi laudantium explicabo excepturi quam ea at voluptatem, iste, culpa voluptatibus ratione, aspernatur deleniti harum. Mollitia in doloremque numquam nulla nemo eius, dignissimos quod, dicta harum aut nesciunt tempore accusamus asperiores quia optio explicabo dolor exercitationem obcaecati itaque. Animi repudiandae, optio sequi nemo veniam quasi facilis quis consequuntur nihil cumque quam beatae, numquam culpa debitis dolorem rerum accusantium officia natus voluptatum nisi incidunt delectus? Veritatis ullam, corporis corrupti voluptas distinctio vero aperiam adipisci exercitationem voluptates asperiores, quae similique itaque sequi perferendis, dolorem eligendi minima error alias vel inventore. Similique earum provident ad? Tenetur animi adipisci explicabo ipsam perspiciatis maiores excepturi quae pariatur, sed ipsum enim aspernatur modi quos nam aliquid totam necessitatibus, minima, facere mollitia dicta repellendus. Voluptate minus odit architecto magnam quaerat tenetur rem iste velit officia voluptatum nam cumque blanditiis, id ex excepturi recusandae atque adipisci voluptatem asperiores sunt repudiandae quisquam! Sint alias quis laboriosam quaerat illo error numquam consectetur impedit, cumque fuga hic quod tenetur repudiandae repellat eligendi non voluptates delectus ipsam blanditiis facere dignissimos. Adipisci assumenda odit fuga natus autem, voluptate aperiam magni modi, distinctio perspiciatis accusamus sunt dolore consequatur expedita voluptates aliquam veritatis at deserunt. Modi quidem quaerat maxime necessitatibus hic quis rerum libero inventore et facilis voluptas voluptatem earum enim iure odit eius, maiores saepe. Velit perspiciatis omnis natus nihil? Qui ex doloremque eum voluptas, voluptatibus provident possimus sunt ipsum placeat mollitia nam fugiat, voluptate repellendus hic nemo consectetur accusantium cum exercitationem unde delectus temporibus et quasi reiciendis. Minus recusandae provident quia nisi ad, neque ipsa nostrum impedit placeat nemo obcaecati, blanditiis voluptatibus odit debitis dolore corporis ipsum? In consequuntur dolorem enim voluptatem corporis numquam magnam inventore blanditiis. Vitae laudantium odio quis vero aperiam! Pariatur excepturi dolorem repudiandae esse, eos rerum tempore laborum aperiam cumque, natus soluta placeat voluptatibus, facilis dolores. Obcaecati error nihil sunt et nulla optio, asperiores veritatis voluptatum sapiente doloremque in reiciendis esse enim laudantium, illo recusandae ducimus id tempora incidunt quia perferendis iusto reprehenderit ratione molestiae. Vero mollitia porro, odit nam officia debitis vitae! Ratione doloribus adipisci hic id numquam maiores officiis dicta debitis quaerat iure autem, reiciendis earum impedit? Fugiat enim, ipsa at, harum voluptatibus nihil commodi reiciendis temporibus cumque adipisci reprehenderit corporis neque, nemo praesentium distinctio optio quas doloribus. Natus a dolores fuga odio praesentium cupiditate eligendi asperiores voluptates, eveniet quae minima sapiente. Quia, possimus. Reprehenderit sequi nesciunt aspernatur quo dicta numquam omnis repellat? Modi, quaerat natus. Tenetur modi deserunt veritatis, debitis natus vitae porro unde praesentium ullam nam earum qui ducimus explicabo nihil sunt nesciunt sit, eveniet voluptates? Illo non nemo, reiciendis facilis corrupti soluta optio eaque adipisci incidunt sapiente impedit nostrum est ea et. Beatae sed dolore esse quisquam ea tenetur adipisci eum reprehenderit, itaque corporis impedit animi praesentium blanditiis. Repellat, perspiciatis! Eos sed quod quasi excepturi veniam perferendis ipsum, dolorem tempora totam laudantium rerum illum sint unde deserunt debitis vel tenetur eius provident ipsa nesciunt consequuntur quo nemo. Est fugiat natus cumque ratione a quos porro deserunt aliquam temporibus, assumenda fuga! Tempore quam perspiciatis sed amet dolorum incidunt necessitatibus delectus deleniti et possimus provident aut mollitia id, voluptate deserunt, omnis, vel obcaecati? Assumenda, incidunt dolores! Molestias, voluptas aliquid temporibus quos porro deleniti veritatis. Quasi, suscipit delectus. Sed nisi enim nesciunt. Quae, soluta culpa? Dolorem quisquam provident nisi impedit architecto? Itaque iste molestiae quidem maxime fugiat delectus ad accusamus quod, ab assumenda provident molestias nemo. Repellat reiciendis in quae culpa dolore suscipit, et eaque accusantium beatae perferendis blanditiis doloremque eos harum tempora nobis necessitatibus. Expedita quo non rerum omnis dolore asperiores eius eum voluptatem blanditiis culpa reiciendis veniam commodi maiores neque ratione velit soluta officiis, consectetur dolorem enim! Dolore officia aliquam minima, laudantium, itaque rerum rem vitae nobis animi et soluta repellat suscipit quaerat consequatur inventore quae voluptates. Possimus laboriosam accusamus incidunt nemo quaerat dicta alias, blanditiis ratione iusto illo natus dolore quod ipsa ea est in ipsam placeat asperiores minima consequatur optio. Consectetur distinctio accusamus obcaecati officia tempora sint nulla quasi saepe, quia dicta veritatis veniam dignissimos quos animi repellat soluta ea facilis recusandae corporis? Aperiam itaque optio iste, autem soluta quae odio vero iure obcaecati laborum dolores asperiores similique ducimus cupiditate dolorem ab totam hic placeat error aspernatur nemo? Vero error, repellat consequatur aspernatur dolore quam? Vero, tempore? Quaerat quod culpa fuga! Incidunt quos consequatur magnam, repellendus dignissimos labore quam nesciunt dolor veniam ducimus cumque non hic reiciendis, unde alias voluptates voluptatem eum praesentium, neque asperiores numquam nemo sed? Earum quasi veniam cumque. Perspiciatis omnis a, sit provident modi totam distinctio dicta molestias quia nesciunt aliquid ipsum, in delectus corporis eveniet ex laboriosam accusamus. A voluptate dolorum tempora officia dolores vero beatae sapiente culpa aperiam animi tenetur perspiciatis repellendus quisquam odio reprehenderit, inventore ipsa soluta corporis sit harum optio distinctio. Similique tempore explicabo quod? Neque impedit inventore laborum? Nam, aspernatur? Ipsa labore, voluptates illo, mollitia at aperiam et earum laudantium quidem nam rem vitae? Nesciunt explicabo dolores, repudiandae corrupti sapiente perspiciatis architecto facilis quasi modi nostrum minus voluptatum molestias! Porro, fuga molestias voluptates fugit quo odit.',
            featured: false
        },
        {
            title: 'Lorem ipsum consectetur, provident elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi recusandae, id ad dolore officiis voluptas quasi quo ipsa. Consequatur dolores officia atque repellat minus impedit, eaque earum cumque quisquam, tempore voluptates delectus a incidunt natus necessitatibus repudiandae eum rem. A aspernatur cum ex sint, praesentium hic suscipit reiciendis maiores vero aut. Laborum distinctio, suscipit quaerat, unde dolore eligendi adipisci quod inventore eos doloribus nihil itaque aspernatur. Explicabo expedita laudantium neque quod ipsum deleniti consequuntur, iste facilis harum blanditiis, sunt voluptatibus alias? Quidem labore quisquam dolore maxime deleniti, doloremque unde exercitationem cum recusandae veritatis incidunt modi laboriosam, sint mollitia cupiditate dolor autem error itaque sed vero ut, at ipsa temporibus. Architecto saepe neque voluptate earum repellendus. Voluptatibus porro assumenda quia nulla minus maiores praesentium impedit, repellendus nesciunt at inventore perferendis atque eaque totam velit reiciendis sit. Rerum ad, sed quo nobis totam, accusamus repellat odio in possimus quaerat harum reiciendis reprehenderit? Nostrum ex adipisci sunt, placeat dolor dolorum consequuntur sapiente qui nihil provident! Facilis, totam ut voluptatum voluptatem animi consequatur culpa debitis exercitationem, provident quasi neque autem delectus, pariatur impedit? Est minima praesentium exercitationem accusantium dolore modi voluptatem laborum, eum veritatis maiores alias hic dolorem, velit eligendi illum nesciunt fugiat. Inventore sequi neque at sit impedit, aspernatur molestiae fugit quibusdam minima quidem iste quasi? Quae quidem modi tempora officia distinctio quaerat quibusdam, voluptatem iusto excepturi et assumenda totam ullam possimus harum labore commodi doloremque explicabo nihil. Excepturi deleniti distinctio reprehenderit ipsum ratione temporibus autem corrupti nisi optio quos obcaecati accusamus animi, omnis ipsam! Numquam explicabo placeat vel consectetur expedita provident! Ad, saepe. Sunt quisquam sit nesciunt facilis tempora, amet aliquid numquam eum nihil cum itaque porro voluptate omnis voluptas optio quibusdam labore nobis placeat molestias? Perspiciatis atque vero non placeat provident officiis. Deserunt voluptates eum sapiente expedita repellat blanditiis nobis voluptatem sunt, consectetur, facere maxime ab cumque dicta error harum maiores veritatis doloremque. Minus nihil aperiam illum beatae distinctio, excepturi veritatis ratione id voluptas quod. Laborum officiis pariatur vitae ipsam repellendus. Consequuntur ut ea corporis eligendi ad facilis vel non, ullam esse nesciunt eum accusantium vero, hic ab nobis aliquid suscipit dolore expedita reprehenderit ratione nostrum officiis eaque! Architecto adipisci nihil suscipit modi culpa! Veniam unde velit placeat quod alias architecto rem quasi obcaecati temporibus illo. At dicta perferendis aperiam, mollitia ex, suscipit voluptatibus doloribus alias necessitatibus nemo dolor, officia soluta possimus ullam. Necessitatibus ullam accusantium quae odio nulla cupiditate, eum nisi modi deserunt distinctio illum excepturi tenetur asperiores reprehenderit veritatis placeat nemo. Similique molestiae iusto sequi accusantium porro odio quos numquam esse molestias, officiis repudiandae fuga sunt quo suscipit, quidem aperiam velit eveniet. Sequi voluptate tenetur debitis ducimus sed ad recusandae magni eaque architecto itaque officia quia magnam ullam adipisci nisi corrupti minima soluta ipsa, consectetur modi? Tempora adipisci nam maxime architecto illo. Non ipsa dolore vitae quisquam suscipit id fugit possimus magnam fugiat itaque expedita, quae iusto dolores hic culpa molestias quas necessitatibus, doloremque, rem cumque placeat illo atque? Repudiandae optio, eos ducimus excepturi, rem voluptatum officia quas velit voluptatibus veritatis sint assumenda quaerat laboriosam commodi obcaecati quia! Dolorem placeat, odio esse quas sunt perferendis aliquid eum sequi, voluptatum, quo dolorum. Saepe fugit, eaque distinctio itaque voluptatibus sequi dicta cum nesciunt tempora quia repellat laudantium dolorem numquam consequuntur soluta possimus nisi nostrum similique ex! Rerum, nemo blanditiis quidem, velit fugiat iste nulla nisi consectetur at veritatis esse explicabo sed suscipit debitis neque non iusto voluptatibus, obcaecati facere doloribus assumenda repellendus eos. Temporibus quam facere expedita? Cum non velit modi? Vitae, omnis nobis minima soluta quod voluptatem consectetur modi quia ad repudiandae autem nemo nihil doloribus id eveniet excepturi odit nulla dolor obcaecati quaerat asperiores dicta laboriosam tempore eaque. Sequi quaerat perferendis sit cupiditate hic at temporibus optio obcaecati aspernatur. Veniam incidunt aspernatur harum natus ratione blanditiis quam quos maxime a. Rerum debitis odio velit minima sed, fuga mollitia fugiat, id doloribus sunt eveniet! Fugit doloribus error quidem, ea tempore harum tenetur quasi neque tempora distinctio ducimus voluptatibus fugiat enim atque, sint accusamus. Perspiciatis atque dolorem neque quaerat assumenda, quae ab nesciunt sed dolor tempora a laboriosam numquam sit ut voluptate animi dolore officia rem, aperiam consequatur illo illum, delectus cupiditate et. Quia, iure assumenda odio amet adipisci fuga iste pariatur enim nesciunt in doloremque, eaque ullam consectetur cumque totam possimus voluptate! Magni, facere vel. Sequi ad quae, accusamus veritatis asperiores nisi fugiat minus quibusdam repudiandae qui, voluptatem id ut cum aperiam sed earum eum laboriosam pariatur perferendis, dolores quo officia aspernatur vitae temporibus! Cupiditate tempore harum hic minus quia! At ducimus impedit, facere libero laudantium rerum necessitatibus est eveniet expedita tempore, voluptatibus molestias. Magnam quis, vel quibusdam accusamus voluptate quas quae, impedit numquam perspiciatis delectus animi molestias nam nihil itaque ullam excepturi vitae. Nemo et beatae quisquam iusto tempora? Aliquid dolores, vero, nam dicta, numquam in illum sint maxime placeat veniam quas nostrum. Placeat, obcaecati. Optio, dolore beatae? Minus voluptatum voluptatibus corrupti provident illo eum, repudiandae minima error exercitationem porro enim, excepturi, ipsam deleniti in ullam eaque accusamus labore nobis! Minus voluptates repudiandae beatae. Dignissimos delectus voluptatibus aperiam eius aliquid ea nobis exercitationem, illo error cum. Possimus repudiandae fugiat pariatur voluptatum commodi, consectetur, sapiente atque deserunt eveniet facere exercitationem, enim neque quaerat veniam ab dolor magni dolorum aliquam dicta nulla nesciunt dolore earum qui perferendis! Nesciunt pariatur commodi, temporibus delectus voluptas ut culpa tempora quia praesentium a adipisci alias eaque ipsam quidem, voluptates eveniet quae dolore vero tenetur nulla officia sit? Sed tempora tenetur suscipit unde totam aut enim cupiditate doloremque, voluptate, vitae quod ipsam inventore voluptatum ad laudantium hic blanditiis magnam dolor iusto vel eos corrupti numquam! Numquam in asperiores, blanditiis soluta natus reprehenderit odit nemo consequatur a officia architecto cumque quidem laborum animi repellat explicabo aliquid. Soluta earum at temporibus? Dolore repudiandae dignissimos explicabo recusandae corrupti excepturi officiis harum, alias quae natus, ex aspernatur aut expedita voluptate. Voluptatibus nisi nemo qui sunt hic ex incidunt minima veniam at omnis aspernatur earum, explicabo doloremque maxime cum minus sit officiis consequatur? Delectus quas aliquam, officia quidem eveniet explicabo laboriosam asperiores eligendi placeat accusantium libero veritatis nihil, cupiditate, nisi reprehenderit corrupti nam dolor ab neque maxime? Officia dicta expedita, doloribus dignissimos sapiente culpa nisi, atque debitis consectetur autem, beatae error? Modi veritatis quidem fugit reiciendis doloribus perspiciatis nisi ipsum molestiae velit tempora quibusdam esse asperiores consectetur officia quia, commodi recusandae corporis aliquid accusamus dolore. Architecto iusto dolorum, eos tempore quo odit commodi illum fugiat sequi quos possimus cumque perferendis molestias dignissimos! Dolor vero facilis voluptatum optio ullam saepe architecto natus, ipsa, a amet quis laboriosam labore nulla eaque, debitis nisi adipisci unde nihil voluptates impedit quasi quidem totam consectetur? Numquam placeat, odit natus quia, voluptatem tempora rem omnis impedit voluptas reiciendis nemo explicabo quidem delectus doloribus fugit autem atque similique voluptatum? Quo dolorum expedita asperiores deserunt nam possimus quam dolores, ipsa doloremque tempore voluptates porro eius placeat laboriosam rem fuga qui laborum esse obcaecati, quis minus. Neque eos tenetur rem corporis at maxime, illum soluta accusamus nobis labore. Pariatur maxime dolorum, quidem suscipit deserunt officia? Quidem, doloribus eligendi quis facilis blanditiis suscipit minima! Alias eveniet recusandae porro, est dolor esse quia. Accusamus doloribus consectetur necessitatibus delectus in maxime ea omnis aspernatur cum saepe rem, quam est, incidunt ullam eius quo.',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit consectetur, provident amet',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos nam. Magnam sapiente magni nulla odit autem veniam, amet provident sequi itaque pariatur dolorem mollitia ad perspiciatis eligendi qui, architecto commodi! Veritatis distinctio, velit ea facere nisi quasi, facilis, ipsa tempore natus non est vitae dignissimos dolorem doloremque esse iure cumque eligendi error autem aspernatur mollitia. Delectus veniam cupiditate laborum, soluta dignissimos dolore quas necessitatibus magni quaerat quibusdam vero corrupti at eius labore quam obcaecati unde voluptates praesentium voluptatum? Maxime nulla dolorem ipsam voluptatibus deleniti et fugiat ut officiis iusto perspiciatis doloremque at rerum, eius, repellat corrupti nemo fuga laudantium distinctio! Consectetur non accusantium saepe dolor quibusdam laboriosam, hic sequi ex quas ratione totam esse temporibus ea aliquid, ab suscipit modi nesciunt velit possimus ipsam id harum. Dicta, rem ea. Beatae dicta iste recusandae molestias. Molestias impedit est minus optio soluta, ad magnam deserunt officia eaque enim quisquam architecto dolorum provident nemo pariatur molestiae assumenda iure a voluptas cupiditate animi voluptates explicabo! Labore magni quas doloremque consequuntur enim ut eos? Nisi laudantium expedita harum rerum nihil, inventore eaque quasi, perferendis nesciunt tenetur obcaecati ipsa? Quisquam doloribus sapiente voluptas adipisci natus impedit aperiam mollitia aliquid modi porro, tenetur eaque delectus vitae suscipit earum beatae deserunt, accusamus tempora nulla? Voluptate distinctio dicta laboriosam magnam tempora, voluptatem ullam provident ea at culpa eos ut cumque fugiat accusantium. Modi harum laudantium nam corrupti in, vitae laboriosam pariatur tempora, quod expedita, iste labore optio est eaque accusantium totam maxime nemo suscipit quas earum reprehenderit. Necessitatibus maxime pariatur et repudiandae distinctio esse in unde! Molestias asperiores nostrum quisquam facere iure unde ut! Consequatur iure eligendi saepe unde quibusdam et voluptas. Quae porro accusamus beatae. Obcaecati sit corrupti ducimus excepturi ea esse quod, iste, nemo neque laboriosam, magni eum facere adipisci. Odio et officia itaque aut placeat voluptate amet consequatur. Ex asperiores nisi, voluptatum corporis officiis eaque pariatur porro incidunt eos quod velit aspernatur repellendus ad veritatis magni fuga dolor. Minus sit ratione nobis non incidunt deleniti, enim tenetur eligendi similique nihil voluptatem adipisci reprehenderit cupiditate iste facilis quae quo mollitia officiis. Eum blanditiis sit dicta veritatis pariatur officia saepe! Molestiae minus deleniti quo ipsum officiis a assumenda exercitationem tenetur id incidunt voluptatem quasi quis dolorem aperiam alias placeat sapiente, laborum unde excepturi quas. Quidem quas dolorum, iusto repellat fugit provident? Iste doloribus harum eos ducimus debitis molestiae iure repudiandae omnis, temporibus totam amet asperiores culpa similique quam consequuntur nostrum? Aut sapiente libero iusto, harum incidunt non soluta ea omnis neque illo. Consequatur praesentium eos accusamus porro voluptate! Neque exercitationem dolores, fugit dolor, in modi sapiente ipsum, reprehenderit fugiat sed maxime minima nihil. A necessitatibus laboriosam odit nisi perspiciatis quaerat pariatur similique quo enim doloribus, quibusdam error saepe? Illo sequi accusamus at deserunt, quos iusto pariatur labore, debitis sint eaque aliquid alias. Fuga iure maiores temporibus autem, facilis, odit labore quibusdam voluptate consequuntur eius sint aperiam voluptatum perferendis ipsum quae culpa harum non exercitationem vero nobis dolorum. Totam aliquam impedit blanditiis. Repudiandae, qui? Nulla natus, provident sunt eveniet velit quas voluptatum, unde, labore recusandae explicabo cum et aliquid deserunt autem. Explicabo praesentium repudiandae dolore iure consectetur officiis laudantium assumenda nostrum cum tempora id sed veritatis accusamus harum, labore, nemo unde a voluptas distinctio. Qui eveniet voluptates mollitia minima earum voluptate beatae voluptatum, quisquam libero voluptatem distinctio nam, magni pariatur veritatis a. Minus aperiam rerum voluptates. Nostrum perspiciatis delectus, enim quidem cumque odit voluptatem ipsa repudiandae! Aut asperiores sapiente aspernatur vitae ad molestias commodi minus quas amet placeat labore distinctio magnam voluptatum voluptatem in vel, quidem, doloremque corrupti, id harum dolorem? Rerum, ipsam impedit! Consequuntur accusantium laudantium tempore officia aliquid quo explicabo! Error unde quibusdam odio quod veniam non voluptatem fugiat. Voluptatem expedita ad amet magnam quas maxime vitae quasi reiciendis reprehenderit ipsa? Nam ipsa aut aperiam suscipit nobis impedit, sed placeat doloremque odit corporis quasi non corrupti sequi maxime quam optio facere in aliquam possimus ipsum omnis tempore soluta doloribus ullam. Ratione dolores dignissimos eaque autem excepturi maxime porro fugiat, temporibus ipsam tempora dolorem. Odit cumque eveniet fugit sed, delectus est consequatur ratione placeat ut qui repellendus reiciendis illo praesentium fuga nesciunt! Neque saepe magni tempora obcaecati distinctio id qui voluptatum! Exercitationem ratione libero dolores consectetur placeat nulla itaque voluptatem quidem nisi delectus dolorem dicta amet, est omnis, illo tempore nobis ab, rem nesciunt! Tenetur dolorum iusto labore. Voluptatem quo architecto iusto a quas deleniti? Ut ab voluptatibus consectetur aliquam cum! Nostrum quibusdam aperiam dolorem eos sit, incidunt nobis vel sunt praesentium, aspernatur, laboriosam error provident pariatur assumenda eligendi voluptatibus eveniet sapiente ratione quis necessitatibus ullam! Libero perferendis itaque, pariatur sunt cum numquam nostrum dolorum at tempora possimus ab fugiat! Reiciendis odit consectetur excepturi sint fugiat nisi id natus quo harum sequi praesentium dolore beatae nostrum dignissimos vel, magni enim ex molestiae rem mollitia tenetur nobis hic explicabo deleniti? Amet expedita enim quae voluptatum vitae, eveniet iure sapiente voluptatibus, sed fuga officia cupiditate ullam nisi doloribus repellat deserunt veritatis provident aperiam. Alias quo sunt, et molestiae, consectetur quas reprehenderit adipisci molestias, velit repudiandae temporibus. Quos, doloribus libero! Commodi error dolorem aliquam recusandae voluptatum eum id cupiditate laborum libero aliquid, eius, enim architecto, consequatur illo dolore nemo. Nihil quam laborum sequi laboriosam. Ipsa quae cumque modi fugiat quod amet nulla optio minus voluptatibus id? Cupiditate error cum natus facilis suscipit. Reprehenderit, explicabo a repellat voluptatum deleniti quaerat consequuntur minus maxime ducimus autem ipsam voluptatibus sit officiis aliquid distinctio quos, vitae asperiores? Neque, est! Explicabo, in optio voluptatum sit labore nostrum non odit, quas provident delectus, enim quisquam! Sed quos obcaecati esse voluptatum. Qui amet eos nam aliquam recusandae dolor, quia tempora saepe architecto officiis veritatis velit atque aut delectus aperiam harum hic! Magnam iure, debitis reiciendis fugiat vero repellendus obcaecati eius? Quisquam sint veritatis exercitationem, eaque ullam, consequatur aliquam maxime velit nisi perferendis officia hic voluptatem blanditiis? Vel laboriosam ut quaerat nihil, eos cum ad quod omnis obcaecati, maiores nobis velit magni culpa aperiam quas. Tempore, nesciunt deserunt!',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing elit Tempore, provident amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eaque corporis nam sapiente praesentium, ducimus enim? Optio dolorum quae dicta nemo mollitia itaque non vero veniam ab magni, beatae molestias maiores id ipsam consequatur omnis eum. Obcaecati, ad, quia voluptates sed voluptatum at consectetur explicabo quae quo vel officiis! Voluptatibus, tenetur ullam eveniet, voluptatem laudantium culpa, accusamus numquam soluta quo dolorum cumque? Modi error cumque doloremque quam? Possimus repellendus voluptas nisi ratione ea dignissimos amet in fugiat. Voluptatibus quidem accusamus officiis hic ratione. Aliquam similique reprehenderit, reiciendis explicabo quae et vero soluta maxime suscipit vitae veniam nobis. Dolores temporibus accusantium vero fugit pariatur repellat eveniet porro, excepturi reprehenderit consequuntur. Accusantium, animi cum provident repellendus ullam beatae explicabo aliquam temporibus neque aut itaque asperiores ad! Dolorum pariatur ullam optio. Minima culpa laborum officiis eveniet consectetur facilis nihil! Repellendus maxime, aut quisquam iure perspiciatis dicta blanditiis deserunt et, officia fugiat dolore sed culpa eius tenetur accusantium adipisci nesciunt autem nobis assumenda eligendi sit deleniti harum earum. Sed corporis vero voluptate adipisci provident, recusandae eos beatae ipsum minus magni repudiandae inventore aliquam, ipsam fuga? Reiciendis quae quod hic voluptas omnis tempore earum amet fuga, aliquid consequatur sit alias, recusandae quasi asperiores ab explicabo architecto odio? Odio, laboriosam totam! Fugiat atque qui est iusto cumque, harum officia, eius quos sapiente reprehenderit deserunt. Quas laboriosam, delectus in officiis libero id numquam fugit ut facilis animi temporibus deleniti omnis natus aut dicta reprehenderit tenetur ea est maxime a dolor? Autem similique aliquid natus sed id illum commodi voluptatem est saepe ducimus possimus ipsum fugiat reprehenderit in cum, provident a qui quas. Accusamus iure, dicta eligendi quibusdam a consequuntur nostrum soluta eius id inventore, architecto animi consequatur minus, alias quisquam. Sint, architecto explicabo eligendi veniam repellat magnam illo quia sunt fuga officiis quos laboriosam sit minus ex ab blanditiis ipsum. Modi, autem temporibus aperiam laboriosam necessitatibus recusandae, exercitationem repudiandae magnam tenetur vitae nihil atque repellat. Officiis asperiores distinctio rerum consequatur atque aliquam soluta nemo magnam similique doloremque, cum necessitatibus odio deleniti ipsam voluptatibus iste, quisquam saepe? Sapiente odio possimus assumenda? Aut architecto laudantium maiores facere ut aliquam at quibusdam adipisci velit facilis, voluptates saepe! Ducimus fugiat corrupti repudiandae natus at provident illo hic dolore eos, assumenda ab iste sint laboriosam voluptate veritatis veniam sapiente amet a facere aliquid alias praesentium enim doloremque omnis! Nihil autem, harum quidem mollitia possimus repellat provident beatae architecto reiciendis eaque aliquid sapiente rem fugit praesentium nisi quaerat libero obcaecati perspiciatis vitae vero ducimus laboriosam consequatur? Deserunt, et! Ratione incidunt, amet excepturi, eius quo a commodi perspiciatis hic nobis delectus ipsam eveniet officiis sed repellendus facilis nesciunt natus deleniti, aut voluptatem quod unde recusandae. Ex, porro amet? Distinctio, reiciendis. Libero quidem atque sapiente laborum amet magnam rem iste neque architecto autem recusandae vero esse molestiae laudantium deserunt, perspiciatis, eligendi blanditiis similique. Laudantium voluptates, sunt quisquam tempora ab porro optio. Vero doloribus suscipit minus reprehenderit et. Adipisci doloremque ipsa placeat quidem facilis accusamus dolore quia! Voluptatibus repudiandae saepe in aut totam odio quibusdam repellendus minus, neque tenetur asperiores est deserunt perferendis ipsum, repellat temporibus omnis cum reiciendis inventore. Architecto praesentium distinctio minus delectus illum, suscipit nisi amet quia, aut omnis quisquam laudantium quod fuga vero molestias. Quidem numquam neque voluptate dolorem quas accusamus laborum officiis omnis hic, incidunt illo autem aperiam, excepturi veniam dignissimos est ipsa! Cum quos error cumque eum cupiditate delectus culpa ea, unde saepe, at laudantium, provident natus est voluptates illo! Vero illo facilis nobis soluta tenetur id, sunt cumque at cupiditate. Quibusdam, rem architecto! Voluptatibus dolore illo, voluptatum quasi libero quis accusamus, nostrum sed earum, laborum asperiores debitis ea quibusdam iure ratione unde repellat ducimus enim consequuntur eius eos vel? Dolor deleniti minus ipsam nesciunt asperiores provident minima quae, id voluptates modi? Dicta, provident eius nobis ducimus fugiat pariatur recusandae ab explicabo quas quisquam possimus ea voluptas sit a adipisci dignissimos itaque cupiditate voluptatum. Deleniti aut maiores dolorem est, perferendis earum doloremque repellat, magni error aperiam impedit illo autem et ab. Sed, tempore saepe! Error placeat, dolorum necessitatibus, voluptates, saepe eum minima exercitationem nostrum aspernatur pariatur dolore! Ad, obcaecati fuga. Enim tenetur deleniti odit minima neque soluta ab eum debitis corporis cumque hic cupiditate numquam nihil sint delectus, quaerat necessitatibus praesentium dicta sapiente obcaecati distinctio aperiam exercitationem est? Molestias laboriosam officiis sunt impedit temporibus sequi minima porro voluptatum ipsum explicabo quae, possimus repellendus provident vitae, quaerat quo, aperiam culpa omnis incidunt iusto perspiciatis aut eius eligendi? Laboriosam ut, unde quibusdam vel facilis perferendis itaque qui, laborum rem accusamus nisi magni ex nemo, consequatur blanditiis nesciunt? Omnis similique impedit nesciunt accusantium alias quis cum magnam, consequatur perspiciatis eius laudantium, libero officiis illo iste earum? Autem quia ullam, inventore repellat nulla odio blanditiis veniam natus officiis sunt? Dicta quasi voluptas tenetur repellat perspiciatis ad nisi explicabo laborum praesentium possimus assumenda iusto deserunt, illo sunt officia enim pariatur alias aliquid sed consectetur suscipit! Quasi asperiores deleniti beatae quod eius non dicta excepturi quidem quaerat, assumenda repudiandae vero corporis quibusdam vitae facere, doloribus libero illum ullam hic suscipit. Cum molestiae reprehenderit veniam expedita earum commodi! Blanditiis cum ab dolore quia obcaecati labore fugit minima nisi amet suscipit, quidem veritatis quis aliquid unde porro esse neque, reiciendis illo ipsam provident voluptatem tempore dolor asperiores animi. Asperiores minima dolore delectus molestias neque blanditiis! Corrupti sapiente aliquid sunt, repudiandae minus architecto eos, quo, maiores quam delectus optio. Quam, officia dolorum, sed provident vitae numquam maxime ipsum ullam nisi omnis odio tenetur quibusdam, magnam blanditiis odit earum eius voluptas unde aspernatur totam neque. Odio, obcaecati quisquam eum laboriosam beatae nesciunt eos dolor fugiat ea consectetur accusantium, ullam ab distinctio eligendi, quas provident quos? Exercitationem magnam repellat vel quis molestias optio soluta, laboriosam, qui deserunt ea doloribus vitae? Iusto numquam repellat esse eius adipisci perferendis ipsum repudiandae enim ratione maiores mollitia eos facilis nostrum laboriosam maxime, laborum quibusdam libero aspernatur quo, sunt sapiente. Dignissimos beatae, reiciendis officiis saepe nam maxime sit at, laudantium vitae, quia blanditiis sapiente cum rerum. Ipsum libero praesentium tenetur iste corporis possimus, nam ipsa? Modi repellendus praesentium cupiditate quaerat quisquam iure sint omnis adipisci. Molestiae facilis provident inventore corporis nemo non eos quibusdam animi commodi quisquam atque amet consequatur assumenda, a quas alias sunt itaque rerum voluptates deserunt autem rem dolor? Dolorum doloremque, eligendi accusamus porro amet ex quas eius commodi a quo rerum eum veniam maxime nostrum. Debitis, exercitationem deserunt quaerat eos laboriosam dicta cupiditate similique fuga eius expedita esse ipsa accusantium illo, sit quibusdam recusandae autem deleniti labore magni distinctio! Voluptatem, aliquam quisquam. Necessitatibus at harum, ut aliquam voluptas rerum ullam sequi aut architecto! Dolor ad vitae, repellendus consequuntur odio omnis, aspernatur amet ducimus accusantium ex alias blanditiis, similique rerum quia velit error ipsam nam optio molestiae architecto incidunt sapiente. Quis exercitationem assumenda non quia soluta voluptatum adipisci dolor, autem ex maiores neque cupiditate quasi ipsa magnam esse eum fuga laborum, provident modi sint blanditiis nihil sed. Pariatur expedita aspernatur veniam assumenda, ad nobis possimus id, non est ab dolores in dolorem nihil aliquam facilis sapiente deserunt aut ducimus eaque veritatis et? Perferendis esse nulla est, aperiam consequatur ex itaque ipsum magni, eligendi temporibus eum ab sint. Eius placeat corporis voluptatem quibusdam, quam ab corrupti molestias dolor, nam, perferendis recusandae maxime ea aspernatur aperiam. Non officiis quo possimus omnis voluptates, itaque blanditiis corporis distinctio cumque nesciunt doloremque quidem dolor quaerat ab quisquam laboriosam dolorem numquam id dolore aut! Nam cupiditate quis veritatis quia doloremque consequuntur? Eius rem hic libero, esse quod optio sapiente nisi adipisci quam laborum a culpa aut iure necessitatibus ipsa.',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing elit Tempore, consectetur elit amet',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, accusantium illo. Voluptatibus dicta possimus quas veritatis sequi cumque sit praesentium excepturi voluptatem. Quis nesciunt excepturi iure officiis exercitationem nobis quisquam et eos saepe maiores, vel earum, consectetur suscipit fuga tempore repudiandae eum, doloribus iste voluptatem quo architecto blanditiis placeat itaque quos? Magnam minima voluptas ratione error eum atque laborum, adipisci quia doloribus perferendis expedita velit pariatur tempore odit qui minus distinctio neque sint? Beatae, adipisci! Assumenda fugit aut doloribus ullam nam amet iusto quisquam ipsam magnam! Incidunt modi deserunt saepe, minus pariatur repudiandae quibusdam aut, harum delectus veritatis illo odio neque qui soluta quaerat optio laborum dolores itaque ipsum veniam rem. Dolore cupiditate dignissimos quam, sunt atque odit neque laudantium quisquam omnis voluptates veniam sint assumenda a tenetur ipsam optio quis numquam distinctio nihil, illum eaque pariatur corporis quasi. In exercitationem veniam ut eius dolores et ipsam dolorum sapiente minima iure ipsa molestiae rem maxime placeat odio laboriosam cumque magni eum eaque, voluptate iste? Excepturi ab, perferendis omnis hic corrupti eum mollitia blanditiis aspernatur quod dolor optio neque doloribus veritatis, laborum, ipsum voluptas fugiat odit labore. Animi ut fugit minus voluptas, expedita deleniti itaque deserunt aliquid distinctio quaerat, quibusdam consequatur? Labore, voluptatem. Facere sunt repellendus dicta error, rerum dignissimos mollitia, beatae cum sint nam doloremque corrupti ipsa deserunt, est eligendi amet. Qui error ab molestiae dolor vero. Eum quasi deleniti, quo minus illum laborum cumque, corrupti iure sapiente ullam dolor enim ipsam est voluptas deserunt, odit repellendus hic autem alias odio! Sint error natus nemo quaerat maiores consectetur qui explicabo officiis dolores magni reprehenderit dolorem dignissimos distinctio repellendus eum corrupti neque optio, aliquid nobis nisi obcaecati recusandae reiciendis illo. Corporis odit dignissimos, adipisci illo quod excepturi saepe aliquid rerum optio eos explicabo ex maiores sapiente incidunt. Repellendus vel necessitatibus sunt sed modi quibusdam tempora obcaecati odit, dolore amet quod facilis rem tempore similique ullam. Quisquam beatae deleniti nemo repudiandae aspernatur ipsam incidunt ipsum qui dolor voluptate. Molestiae nihil quaerat consequatur accusamus cupiditate sint nobis, nemo est quis tenetur beatae voluptates non, dolore at? Tempore libero perspiciatis asperiores maiores ducimus ea nihil doloribus fugiat ipsum doloremque id exercitationem veritatis alias quisquam porro delectus ab, accusamus laborum facilis totam minima magni, aspernatur earum quos? Quidem id corrupti perspiciatis numquam, dolorum animi accusamus sit sequi qui excepturi ut exercitationem alias soluta! Voluptates vel, laborum officia delectus minima possimus illo ut accusantium placeat excepturi illum provident mollitia temporibus, ratione qui molestias modi. Ipsa, doloribus, quaerat voluptatem, recusandae adipisci officiis repellendus tempora pariatur repudiandae at quisquam sequi modi illo reiciendis! Corrupti quasi quam ipsam asperiores, ex illo! Voluptatibus provident quia consequuntur magni dolorum excepturi amet illum maiores corrupti quaerat, ea voluptatum laboriosam sed libero dignissimos veniam necessitatibus consequatur eligendi sit modi accusamus esse aliquid corporis iusto! Officia quae consequuntur fuga corporis consectetur cupiditate earum, autem nobis id numquam, quos eum distinctio fugit nulla similique, dolorem voluptatum nemo suscipit illo in. Natus culpa amet a cum odit similique eos nihil suscipit vero, ipsam provident labore neque nisi facere fuga asperiores aliquam, deserunt atque adipisci officiis, consequuntur quae enim aliquid. Reiciendis porro provident adipisci sunt iure doloribus, voluptatum obcaecati nulla labore, officia nisi! Beatae culpa commodi quisquam corrupti esse illo nihil quidem neque temporibus eligendi. Sint aspernatur distinctio culpa architecto quam a, corrupti magnam dolor sapiente. Dolore, eveniet! Odit nemo vitae commodi, accusantium error alias autem aspernatur voluptatum molestias placeat est tempore, dicta iste amet excepturi neque illum ratione optio. Sed, eveniet? Nemo magni quas, rerum incidunt est veritatis ad quam quasi nam cumque, cupiditate culpa quo fugit animi velit voluptates ipsa ut provident accusamus quod voluptatum beatae. Laboriosam vitae optio alias perferendis est recusandae porro, facilis atque dolorem perspiciatis laudantium eius repellendus mollitia, minus rerum quo officiis eligendi reiciendis. Quam nemo cum, similique soluta autem voluptate, ex reprehenderit magni fuga temporibus harum, pariatur qui error iure. Quos, fugit accusamus cum autem velit vel suscipit, ratione eligendi quisquam reiciendis modi expedita veniam dicta, eius voluptatem! Magnam vero cupiditate soluta sint eaque necessitatibus dolorem reiciendis. Cum provident unde facilis aperiam reiciendis, fuga adipisci omnis quas? Iusto sapiente maiores magni id et ea tempora excepturi perspiciatis sed ut consequatur voluptatibus ex possimus, cupiditate, quaerat, facilis placeat architecto error. Iusto nostrum harum consequatur, enim, facilis suscipit error voluptates, blanditiis fuga sequi expedita incidunt neque alias libero id itaque illo iste quo autem exercitationem consectetur fugiat? Sit blanditiis suscipit fuga voluptates, quis porro provident fugit labore at doloremque nisi sequi soluta, quam debitis, corrupti perferendis distinctio animi unde doloribus odio vero aliquid! Officia porro eligendi magnam sunt non, ducimus debitis accusantium fugiat totam ut nihil dignissimos, a repudiandae inventore, excepturi ad eos temporibus odio dolorem est veniam consectetur. Iste pariatur, hic neque magni eveniet, consectetur voluptatibus nihil recusandae sed praesentium laudantium omnis. Animi totam neque exercitationem iste sed, velit autem iure soluta aut accusamus ab sequi voluptatibus molestias eveniet distinctio repellendus facilis doloribus atque nesciunt fugiat vitae culpa voluptatem incidunt numquam. Quis eos repellat explicabo vel nobis minus incidunt magnam odio esse in inventore rerum distinctio aliquid alias hic, officia impedit unde nam? Ipsam quis tenetur pariatur, qui ea reiciendis quam sit aliquam! Velit dolores, repellendus corrupti odit labore dolore ducimus, eveniet laborum illo qui, sunt expedita autem beatae. Sit vitae quasi iure praesentium? A alias recusandae cum ducimus, voluptatibus nulla quo ab, culpa modi veniam eveniet totam repellat tempora fugit repudiandae nostrum necessitatibus aliquid sit rem id ipsa at impedit eaque? Assumenda maiores nesciunt sint quas dignissimos, quod quasi explicabo! Veritatis, provident beatae dolorem nesciunt, fuga pariatur commodi porro sunt maxime consectetur ratione corporis placeat quo voluptatum! Vero ex consectetur pariatur magnam libero, dicta accusamus ea enim. Maxime laborum in voluptas culpa consequuntur minima nostrum molestiae quos, a eligendi reprehenderit numquam magnam voluptates exercitationem, alias, officia asperiores velit quibusdam provident sequi possimus sapiente et ex. Necessitatibus minus ab assumenda blanditiis dicta nostrum magnam tempora provident odio magni numquam cupiditate corporis eum, minima, distinctio repellat animi. Nemo voluptatum autem repellendus distinctio, maxime id consectetur explicabo ipsum qui voluptatibus perferendis corrupti unde!',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing elit Tempore, provident amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe cumque quod sequi incidunt quisquam numquam totam nobis sed adipisci! Perspiciatis est ratione, eveniet, ex doloremque odio necessitatibus veritatis recusandae adipisci, fuga hic unde eos non voluptatum! Architecto, modi molestiae at sint consequuntur illo nobis dignissimos laudantium ducimus porro fugiat unde! Ipsum, adipisci! Voluptates et animi repellendus ea. Placeat, similique earum inventore corporis eos expedita hic. Eius rem sint eaque amet labore nostrum cupiditate, exercitationem porro nobis magni vitae? Dignissimos vitae voluptates voluptas est sed ipsum deserunt accusamus alias laudantium tempora reiciendis labore vero esse vel beatae obcaecati, tempore fugiat cupiditate quis inventore. Delectus quos recusandae accusamus repellendus, ad at rem quibusdam, explicabo nulla id, adipisci sit nihil impedit voluptas quasi totam doloremque distinctio dolorem labore. Corporis, obcaecati similique asperiores quasi cupiditate consectetur labore beatae iusto nulla, iste quam repellendus quas dolorum debitis nesciunt aperiam officiis voluptatum temporibus error mollitia. Delectus nobis nulla corporis aliquid, sint adipisci repellendus voluptatem dolorum unde quisquam enim quaerat ex ab qui illum culpa quibusdam ipsa harum impedit pariatur obcaecati eos temporibus, eaque nihil! Est labore aspernatur provident nihil deleniti unde dicta aperiam porro laudantium assumenda ipsam libero vel tempore sint mollitia, ea similique hic aliquid doloremque voluptate odit qui! Officia, hic accusantium quidem doloribus labore molestias ad architecto, ipsa nulla tempore ratione cum, voluptates praesentium possimus qui quibusdam! Sequi numquam, commodi tenetur quos voluptas sint nulla aut eveniet quo aperiam dolore error animi ut nisi ipsam eaque laudantium voluptatem soluta beatae reiciendis? Molestias impedit fugit, voluptatem esse inventore pariatur vitae temporibus maiores odio culpa provident eligendi velit qui quo iste. Alias cumque corrupti rerum debitis nemo, optio quas possimus necessitatibus aliquid tempore impedit eum cupiditate ullam error architecto velit consequuntur libero culpa voluptatum deleniti commodi. Quos, illum laboriosam. Ea dolorem nihil commodi placeat consequatur reiciendis asperiores, aliquid consequuntur ad hic at officiis qui quidem nulla nostrum iure a maxime id? Ullam eaque quos recusandae porro placeat voluptatum cupiditate magnam quisquam repellat, ex libero sit excepturi commodi veritatis impedit saepe eius facilis nobis earum culpa corporis esse voluptas soluta laborum! Laudantium atque officia perspiciatis nobis amet, dignissimos sunt nostrum vel eos veniam repellendus quo quae reprehenderit beatae velit. Harum non facere ex vero modi quod excepturi minus repudiandae, placeat quae sit voluptate sequi dolor voluptas beatae veniam ad fuga quia magnam unde quisquam reprehenderit porro. Praesentium quia blanditiis fuga excepturi molestiae cumque animi autem molestias consectetur, ad vero in nostrum rerum ab. Incidunt, laborum quia necessitatibus perferendis sit eos adipisci? Aspernatur obcaecati blanditiis praesentium ad debitis excepturi dicta est veritatis eligendi modi et adipisci quia perferendis numquam illo esse, soluta, illum nemo beatae nobis! Cupiditate vitae temporibus beatae reiciendis? Placeat amet aperiam harum cupiditate doloremque, sunt eveniet voluptatum molestiae dolore quae labore, similique perspiciatis! In, ab quisquam ratione quos odit dignissimos, corrupti optio illo voluptates aliquam consequatur culpa atque, explicabo eligendi suscipit. Tempora assumenda dolorum eaque? Eius quia, a earum nobis repellendus, cupiditate dolore culpa, deserunt est esse quae provident quasi. Quod a aperiam vitae cum non optio asperiores, eligendi amet minus neque suscipit iste, dolore, quam blanditiis modi consequuntur quaerat. Necessitatibus omnis, dolores aut nisi doloribus sequi culpa saepe maiores labore tempore et inventore in doloremque similique voluptate eum quae ratione aperiam. Nihil consectetur veniam dolorum, velit quibusdam atque maiores. Quia placeat inventore eum ipsum quaerat illum quam natus soluta ab adipisci, nulla exercitationem doloremque ut delectus eius? Suscipit amet nam quibusdam, magnam iusto, consectetur nulla, voluptatem similique ipsum molestiae architecto. Saepe sit ratione ipsa quam ducimus placeat cum! Eum praesentium eaque quas enim ipsa mollitia, iste pariatur quisquam debitis eos perferendis, aperiam quia? Quam velit aspernatur eveniet consequatur dignissimos facere fugiat illo delectus possimus magnam nulla nobis, necessitatibus impedit. Aut inventore eaque adipisci modi sed quibusdam et rem nostrum aspernatur quos accusamus iste culpa, alias illum minima mollitia officia, tenetur, asperiores impedit. Tenetur perspiciatis possimus minima rerum soluta molestias, quibusdam tempore atque quas necessitatibus similique accusamus alias voluptatibus inventore quasi doloremque. Ipsa sit voluptatem doloremque animi mollitia aut atque adipisci repellendus sapiente neque id quo iusto distinctio in optio exercitationem excepturi soluta minus, sint eaque facilis fugit ut necessitatibus. Dicta neque sit ex consequuntur perferendis, placeat quia minima facilis, tenetur hic a odio expedita tempora iure, laudantium ad praesentium laborum rerum non reiciendis. Voluptate laboriosam assumenda voluptatum inventore mollitia, sunt itaque officiis natus quos adipisci. Veritatis aperiam aut perspiciatis quas dolores, error tempora temporibus eos officiis nostrum molestias minima rem quam suscipit quidem quae et nisi vel? Dicta laboriosam unde libero, a voluptates quidem distinctio quia ipsam repudiandae fugit illum possimus velit odio inventore, blanditiis quas dignissimos sunt! Neque nobis necessitatibus error doloremque sequi nostrum sunt commodi aspernatur, id modi doloribus ipsum deleniti fugit non veritatis provident velit, mollitia similique ad! Odit neque voluptatibus id natus? Consequuntur mollitia eligendi et necessitatibus nobis fugiat, alias praesentium repudiandae labore ipsam possimus vitae obcaecati dolor tenetur temporibus quos incidunt, dignissimos suscipit voluptates laudantium quas nesciunt recusandae iste culpa. Tempora asperiores eum, quia repellat dolor officia quae quod distinctio veritatis dolore adipisci veniam ipsam deleniti facere voluptatum voluptates a est aliquam harum officiis quibusdam neque, magnam sit unde! Incidunt, voluptatibus officiis officia aliquid illo delectus impedit mollitia accusantium eum esse ipsam. Fuga eaque ex nihil molestiae unde, laborum accusantium cumque, ratione velit, a necessitatibus atque soluta explicabo excepturi quod quis? Aspernatur, laboriosam esse consectetur commodi nesciunt aliquam explicabo atque tenetur illo libero quaerat error aliquid cumque, porro asperiores sunt sit veritatis nostrum tempore dicta eum? Numquam praesentium at suscipit! Hic itaque repudiandae temporibus consequuntur omnis iste quaerat quo incidunt, earum doloribus ratione dicta! Dolorem, dolor illo! Perferendis dicta quidem aliquid laborum quo doloribus est quae magnam in tempora, voluptates necessitatibus non nihil hic incidunt. Odio dolore sit, illum, quia consectetur quibusdam adipisci incidunt a rem, et itaque consequuntur veritatis maxime distinctio tempore soluta saepe nihil est optio dolorem molestias labore officia. Dolor aperiam optio distinctio adipisci ratione ipsa quasi mollitia provident deserunt earum quam impedit blanditiis quis minima quo, ab cum possimus incidunt iure. Fugiat dolores dicta porro dolorem animi possimus, voluptatum omnis et ut labore praesentium pariatur velit, vero accusamus itaque distinctio nihil hic voluptates debitis unde error. Quas ab eveniet corporis aliquam distinctio ratione saepe, maiores incidunt minus pariatur, blanditiis suscipit enim aspernatur est dolor doloribus molestias voluptas! Nam maiores minus, quas, error non tenetur suscipit deleniti laborum cumque omnis explicabo! Magnam explicabo expedita fugit vero eveniet, corporis mollitia corrupti repudiandae dolorum molestiae quisquam aliquam. Sed pariatur soluta, cumque ratione a sunt aspernatur, ipsam laborum facilis delectus quod labore molestias. Ut tempora repellendus odio voluptates fugit, excepturi accusamus consequatur modi. Ducimus ut accusantium maxime dolor?',
            featured: true
        },
        {
            title: 'Lorem ipsum dolor amet adipisicing elit, amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates harum facere voluptatum ullam veniam quasi saepe corporis architecto ab, at accusantium porro animi rem minus quis temporibus id repellendus, veritatis dolor perspiciatis vel? Ipsam neque, aliquam voluptates velit quo perspiciatis asperiores, assumenda non laudantium unde aut voluptatum ratione dignissimos et ipsum hic vero! Exercitationem expedita odit officiis id eaque ipsam, repellendus voluptate rerum ratione illo inventore assumenda a repellat ducimus accusantium laudantium velit impedit quaerat eligendi, ab dolorem dolore, minus necessitatibus. Id eum rerum dicta. Ducimus error animi dolorum ipsum id. Perferendis incidunt magnam nisi reprehenderit similique voluptatem architecto vitae ipsa, autem dolore, necessitatibus assumenda, eius et. Itaque distinctio deleniti corrupti ut aliquid. Voluptatem, vel repellat odit ducimus dolorem, voluptas quasi recusandae delectus laudantium nam ea ex tenetur eveniet qui? Iure, impedit nisi at autem veritatis facere quae vero voluptate earum sapiente deleniti natus distinctio provident repellat dolorum fugiat sit tenetur, vitae molestiae ipsam accusantium? Nostrum mollitia libero et quos non, beatae veritatis! Blanditiis excepturi iusto laudantium, dolorum fugiat dignissimos! Fugit iure commodi quaerat, laboriosam dolorum sed quidem inventore impedit similique dolores, quas odit, cupiditate eveniet? Quidem reiciendis explicabo maiores velit, incidunt id! Temporibus illo assumenda nisi ipsa vero, incidunt, voluptatibus facilis voluptatum excepturi tenetur quasi aut asperiores, magnam laudantium quibusdam non? Ut, consectetur? Quae numquam blanditiis soluta quo. Et libero, maiores placeat nihil qui, officiis quos soluta neque minus nisi voluptate a, asperiores repellat laborum eos in repellendus eius temporibus doloremque sint illum? Dignissimos, fuga sint consequuntur tenetur deserunt eius itaque aliquid blanditiis placeat quia accusamus beatae inventore suscipit ipsa tempora architecto adipisci, nobis delectus eligendi, natus nam fugiat illum. Molestias in excepturi reprehenderit maxime earum nulla officiis, atque debitis optio labore. Laborum, cupiditate neque rerum impedit doloremque iste id hic, dolorum velit quis fugit. Error maiores quaerat rem repellat aliquid. Laborum totam molestias quidem. Beatae assumenda deserunt repellat sunt delectus modi officia minus atque dolores culpa? Consequuntur delectus placeat ea est omnis velit dolor laboriosam voluptatem autem odit ullam fugit asperiores molestias voluptatibus alias laborum reprehenderit, ad vel odio minus sunt! Iste facilis optio a illo perspiciatis voluptatum excepturi adipisci debitis impedit beatae quia suscipit magni, assumenda vitae quis ab pariatur. Sit non impedit hic, amet suscipit itaque magnam rem commodi voluptas autem eligendi ea a quidem ratione quia sint libero nisi. Eius nisi accusantium neque maiores vel fuga minus fugiat, consequuntur ea dolores omnis natus quo, non, molestiae quia in exercitationem? Explicabo culpa non sunt earum voluptatibus sit accusamus iste veritatis tempore dolore, corrupti sed libero a ea nostrum obcaecati aliquam. Commodi minima veritatis natus nostrum quae quis. Voluptatum sit architecto quas laboriosam enim? Deleniti modi assumenda facere accusantium, unde amet. Earum repellendus numquam voluptates consequatur aperiam recusandae corporis cupiditate voluptate autem sed! Dolores aperiam cupiditate nostrum quod ex nemo voluptates nesciunt corrupti ipsum ducimus, voluptatum animi nam sequi voluptatibus fuga quae aut. Ducimus assumenda, est labore nisi dignissimos harum, officiis exercitationem sunt consectetur delectus veniam inventore dolores enim possimus optio vitae ipsum voluptate impedit odio rem dolorum beatae? Cum quis consequuntur sapiente dolor, dolores numquam quos officia earum quaerat quas libero molestias, ad distinctio quisquam temporibus. Ut blanditiis inventore officia temporibus rem earum aliquid in modi eaque? Tempora laudantium rerum deserunt cum commodi nam accusantium delectus corrupti exercitationem similique necessitatibus maxime sed, culpa officiis, illum doloribus ipsum iste facere at. Distinctio earum ipsum sit facilis adipisci soluta ducimus velit totam impedit? Vitae eligendi eum magni quae adipisci atque mollitia architecto neque? Laudantium perspiciatis pariatur harum ipsum perferendis, repellat dolorum atque neque error quisquam id exercitationem a! Iste, natus recusandae debitis doloremque omnis iure sequi? Saepe eveniet dolore voluptas provident magnam minima accusamus deleniti explicabo sint optio, aut, sapiente quam distinctio amet at ipsa, voluptatem voluptatum. Atque, harum maxime, repellendus nesciunt doloremque voluptate tempora ex corrupti inventore corporis labore non, porro nihil assumenda. Iure voluptates iusto nam inventore in libero deleniti esse voluptate vero temporibus hic distinctio, illo quam quo ducimus quidem ex repudiandae eum aspernatur labore ipsum culpa expedita ut. Exercitationem ducimus iure iste eveniet voluptatem ad, inventore veritatis soluta quidem harum facilis, labore aliquam ullam minima, saepe sapiente dignissimos cumque eos? Reprehenderit, a inventore eaque repellendus laborum, consequuntur quam rerum laudantium soluta, vel incidunt! Tenetur voluptate temporibus ullam, soluta inventore, dolor porro earum quibusdam tempora, assumenda similique expedita natus perferendis amet nam sequi ut dolore iste ab. Quis accusamus suscipit minima? Blanditiis culpa minus nemo assumenda eveniet est nobis quod! Nemo necessitatibus quae sunt perspiciatis, numquam aliquid a esse libero at corrupti recusandae magnam unde iste rem suscipit tenetur fugiat porro earum alias magni quasi iusto impedit nihil. Expedita ad, voluptas quaerat minima obcaecati nemo. Fugit soluta amet harum, labore quae facere nostrum beatae! Non dolorum tenetur, incidunt quia molestiae neque provident ipsum nesciunt ipsam deserunt placeat nisi eligendi recusandae iure dignissimos qui quibusdam ipsa. Blanditiis, laudantium placeat dolores possimus sint eaque perferendis assumenda minus natus ipsam adipisci maxime quibusdam accusantium odio quaerat aperiam ut voluptatem, quae magnam debitis ad dolore pariatur cupiditate sit? Ab delectus, ratione quisquam unde neque ipsam voluptatum fugiat labore, eos similique cupiditate modi minima officiis. Placeat similique atque repellendus expedita asperiores dolorum corrupti nesciunt doloremque nostrum dolor, officia cum earum facilis nam et veniam, qui, recusandae praesentium! Eveniet tempora atque amet sunt porro neque, excepturi aliquam quisquam. Et similique quasi, pariatur ad eos amet soluta, in provident quaerat, assumenda quidem debitis magni quisquam mollitia? Consectetur ex voluptas, commodi nam ea suscipit unde nisi itaque amet repellat doloremque voluptates eum nobis neque minus, magni aspernatur dolorem dolorum sed doloribus. Nemo alias quisquam necessitatibus quos distinctio, vel ea illum mollitia! Eligendi minus corrupti, ducimus sequi aut expedita non sint labore quam enim, dolore laborum blanditiis culpa. Minima tenetur nihil ut, reprehenderit odit repudiandae laudantium consequuntur voluptatem, repellendus, ipsum aperiam quo mollitia id sint distinctio sapiente veniam qui labore maxime nostrum nulla. Ratione voluptate eum dolore reiciendis fugiat, provident ipsa cumque, vitae quam voluptas aliquam expedita iste cum culpa alias deleniti commodi inventore corporis sed eius animi fuga. Maiores saepe voluptatem officiis voluptatibus laboriosam adipisci quisquam ipsam, ratione aspernatur. Tenetur, molestiae? Aperiam quas nihil dignissimos totam incidunt et possimus quisquam maiores saepe cumque eveniet id ut minus perspiciatis mollitia est, eligendi consequatur vitae inventore dolores. Excepturi ducimus maxime aut quidem accusamus laudantium expedita, minima odit aspernatur obcaecati nulla laborum eligendi unde similique.',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur elit Tempore, provident amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur deleniti possimus vero ab ratione id corrupti voluptatibus rerum, veniam quod nobis esse ea numquam enim, quam cupiditate repellendus vel ex autem eaque mollitia porro quia sed. Nam incidunt dolor fugit fugiat nihil sequi maiores aspernatur doloribus, quasi perferendis accusamus accusantium optio quod molestiae magnam facilis itaque ut labore fuga provident libero culpa corrupti. Id, minus delectus, fugiat eum odio corporis esse ipsam placeat sit facilis, pariatur ea tempora quis alias explicabo eos exercitationem necessitatibus deserunt ipsa! Animi maiores repellendus delectus minima velit nisi ducimus, quis quo adipisci recusandae quaerat. Minima, aut consectetur tempora aperiam omnis possimus corporis nobis hic maiores consequatur sunt ipsam incidunt expedita excepturi quidem numquam ratione asperiores. Ipsam maiores a nobis maxime libero, molestias debitis mollitia aut ea recusandae aliquam laudantium repudiandae cumque tempore. Dolores nisi nobis eligendi sit quo cum ex pariatur ab, quod assumenda exercitationem maxime quos enim eius, architecto magnam totam cupiditate adipisci! Doloremque ullam voluptates, tenetur exercitationem nisi, neque eveniet repellat maxime dolorum vitae ab necessitatibus? Ad voluptatem sunt delectus hic ipsa quos quaerat rerum eaque iusto voluptates, velit officiis atque optio iste recusandae neque facilis illum deleniti aliquid qui odit quasi. Perspiciatis cumque incidunt sapiente? Aliquam sapiente quod ad tempora adipisci. Assumenda commodi qui harum voluptatum nesciunt neque, dolore soluta quaerat iste quasi maxime ipsum a ad fugiat laboriosam, amet iusto eligendi nobis voluptate. Repudiandae expedita enim officiis veniam, fugiat rem dicta odio a! Tenetur ea nisi ipsa id neque amet minima ad, error sed laboriosam qui eligendi culpa pariatur iure ipsam laborum repellat at quo officia? Blanditiis molestias qui omnis impedit repellendus laborum culpa perspiciatis ut, pariatur itaque officia non eum esse iusto quae iure harum fugiat aliquid facere? Ad iure nesciunt officiis maxime asperiores corrupti quam beatae. Impedit, optio. Accusantium reiciendis fugit illum! Nihil, minima mollitia! Laboriosam, culpa sapiente quisquam eligendi labore fugiat voluptas ea minus ipsum reprehenderit. Sunt, blanditiis vero? Corporis non neque hic iure harum nisi corrupti. Minus dolorum animi reprehenderit, repudiandae iusto beatae unde vero rem labore voluptatibus pariatur ea quod accusantium illum assumenda rerum ad commodi laborum, corporis perferendis incidunt in modi possimus. Reprehenderit enim voluptate recusandae necessitatibus, dolorem magni maiores, nemo sapiente, atque minus excepturi exercitationem voluptas minima doloribus nostrum mollitia hic animi aliquam. Repudiandae necessitatibus illum tempora maiores, non, ut, voluptate aliquid ea perspiciatis consequatur esse deserunt saepe! Aspernatur quis, dolor corporis non eos perspiciatis libero. Sunt quasi omnis aspernatur laudantium vitae molestiae quaerat earum enim soluta, odit animi eius exercitationem ullam recusandae officia unde possimus velit ratione fugiat minus. Labore ratione veritatis, exercitationem libero, error quod debitis pariatur doloremque voluptates, nihil cumque odio architecto nesciunt nemo ex sunt officiis expedita praesentium temporibus molestias non. Laboriosam, harum eaque ullam asperiores nisi perferendis minima et odio obcaecati dolore quibusdam, dolorum magni, voluptatum commodi facilis explicabo maxime deserunt recusandae laudantium temporibus labore animi in a? Deleniti delectus, nesciunt odit ipsam, temporibus perferendis provident explicabo porro quas natus aperiam eligendi aut corrupti accusantium architecto, nihil inventore ducimus molestias asperiores aspernatur hic quae blanditiis adipisci! Ipsam numquam vitae, aliquam nisi placeat veritatis nulla, atque officiis eum deleniti, magni ducimus neque tempora sunt minus labore? Dicta quos architecto expedita obcaecati possimus, perspiciatis deleniti odio nisi quia laboriosam incidunt molestiae unde voluptas odit quo nesciunt repellat molestias id eius debitis nobis blanditiis sint delectus modi. Reprehenderit, labore aspernatur quia quasi corrupti ducimus sit mollitia necessitatibus temporibus quibusdam facilis nulla eligendi consequuntur ipsum unde sed aliquid ullam, facere officia soluta adipisci nisi quam fugit repudiandae. Modi ut ducimus iure quam! Repellat qui voluptates aliquid ipsum earum error ipsa, doloremque ex eos quo sapiente numquam facere excepturi iste sed fugiat similique explicabo velit facilis nihil possimus ab fuga commodi tempora! Doloremque perferendis officiis numquam sunt laudantium iure, vel ex, unde dignissimos totam nobis dolorum impedit quibusdam nemo quas ea facere, voluptates ducimus! Eum at voluptatibus eos cum quas praesentium quo harum dolor deleniti adipisci ipsa provident natus quam impedit iste ea nemo quisquam non debitis, est perspiciatis. Vero facere, in repellat numquam recusandae magni omnis fugit ducimus quos non porro similique fuga? Laborum accusamus itaque placeat voluptas dicta, iusto obcaecati praesentium quis in dolorum ipsum? Repellat dolorum blanditiis voluptas asperiores maxime delectus reiciendis recusandae sed quia voluptatibus id perspiciatis cumque quidem at minus eveniet et, animi ipsa unde, sit nesciunt dolor assumenda dicta? Iste debitis at ipsa ducimus, quidem, omnis similique inventore ut fugit optio repellendus tempora, voluptatum mollitia officiis? Quisquam iusto laboriosam dolores enim quibusdam, consequatur ipsum tenetur explicabo exercitationem odit deleniti porro fuga, in sed omnis atque dolorum facilis voluptates. Omnis iusto, repellat quas distinctio nulla quis dignissimos cupiditate pariatur. Corrupti temporibus veritatis debitis mollitia doloribus porro est harum suscipit recusandae, sapiente, quidem, numquam culpa architecto nisi velit totam ipsum eligendi quos reprehenderit consectetur voluptatem voluptas rerum? Aliquid, reiciendis.',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur elit Tempore, provident amet elit',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates minus nesciunt similique mollitia pariatur alias placeat cum libero esse, illum quae quaerat. Mollitia dicta voluptates quisquam fugit eius dignissimos nesciunt enim natus dolor, soluta ducimus laudantium praesentium neque ullam cumque quod vitae reiciendis quaerat molestias. Libero dolore tempora, quam placeat obcaecati consectetur assumenda consequatur cum, corrupti voluptates incidunt eveniet aperiam alias? Quasi consectetur esse, ipsa labore nisi quo consequuntur porro itaque! Omnis, sit? Excepturi, neque. Minus perspiciatis impedit unde accusamus animi quia quod ratione quis esse hic incidunt totam vel, alias assumenda veritatis ullam! Dolor veritatis accusantium expedita deserunt alias quod eligendi repellendus quaerat ab sed, rem consequuntur deleniti fuga voluptates labore maiores veniam dolores perspiciatis distinctio mollitia tempora, nam, iure similique? Tenetur ea architecto eos perspiciatis similique aliquam, molestias officiis laboriosam rerum nobis blanditiis aliquid dolor nam iste voluptatibus excepturi facere alias. Minus, assumenda reprehenderit est quis deserunt id consequuntur, qui vitae iste perferendis inventore eaque repudiandae cumque minima, quae impedit aliquam doloremque sapiente nobis. Assumenda dicta accusantium necessitatibus omnis soluta! Incidunt nostrum dolorem earum natus quae in eum voluptate ut quidem? Odio modi voluptatem iusto fugiat dolorum eaque repellendus, deserunt assumenda rem officiis! Architecto nemo impedit at sed error vitae? Cupiditate ipsum quos vero saepe, temporibus quaerat, explicabo minus ratione laboriosam iusto soluta accusamus quo, adipisci impedit neque eos? Repellat exercitationem laboriosam placeat soluta facilis iusto quis doloremque veniam modi, beatae perspiciatis, nihil asperiores consequatur dolores id nobis ad reprehenderit odio. Dolores, impedit minima similique, maiores, ipsum animi molestiae doloremque veritatis aliquam perferendis saepe iure quae. Nisi, modi quidem libero obcaecati nobis dicta consequatur alias voluptate adipisci magnam labore molestiae architecto voluptates ducimus veritatis dolorum saepe dolor! Maxime doloremque voluptatem sit natus veritatis quos quaerat voluptatibus alias. Distinctio ex ab sit ipsa velit iusto! Culpa reprehenderit rem ratione ab veritatis officia soluta laborum possimus autem quas, architecto quis nesciunt maiores iusto fugit perferendis mollitia animi molestias. Fuga nobis ducimus provident, veritatis quo quibusdam repellat exercitationem ipsum tempore minima perspiciatis tempora saepe sit eligendi labore recusandae dolorem nesciunt ad architecto. Vero ipsa quaerat voluptas voluptatem consequatur in perferendis. Perferendis reprehenderit maiores tempore incidunt ex, exercitationem inventore nemo, atque itaque culpa vitae ratione quidem et beatae non commodi in! Impedit nesciunt tenetur laborum minus et aperiam consectetur dicta exercitationem error quaerat ducimus, alias vero dolore eligendi iusto eveniet voluptate magni illum, corrupti quam! Ipsam aperiam quos, aspernatur rem exercitationem tempore libero corporis odit similique minima illo? Dignissimos ea asperiores voluptatem ipsum provident necessitatibus dolorum veritatis, quibusdam rerum, quod vel saepe at modi. Placeat consequuntur illum unde. Sit, officia, libero ipsam, vel ratione nulla quae veniam quibusdam provident quaerat distinctio odio nesciunt in tempore nihil fugiat. Nostrum reiciendis, eius omnis minima, laborum vitae, aliquam rem nesciunt quos sed delectus debitis exercitationem aperiam nobis deserunt repellendus beatae maxime excepturi consequuntur dolorem nihil praesentium! Mollitia repudiandae repellendus quia, quas at ex rem deserunt commodi exercitationem impedit, magni sunt nam, iste dolorem maxime. Quia ea nesciunt veritatis, facere rem necessitatibus optio incidunt debitis, mollitia nisi iure ducimus non asperiores maxime natus blanditiis iusto voluptas ipsam eaque voluptate vel voluptatibus repellat! Sunt quaerat minima cupiditate obcaecati assumenda ut incidunt hic odit provident voluptas ullam nesciunt perferendis, sapiente beatae natus repudiandae autem non officiis nemo, est at placeat? Commodi delectus ut, nisi aliquid id minima ullam veniam cum non tempora doloremque porro quisquam, earum hic quas. Dignissimos deserunt officiis dolores laboriosam! Dolor inventore nihil modi non, voluptatem tempore eum quidem praesentium esse blanditiis a quae repellat dolores est officia officiis alias accusantium quibusdam sapiente quas neque obcaecati quam animi? Hic sequi eius tenetur aliquam, facere libero excepturi repellendus ex sit quasi nisi corrupti cupiditate dolorem inventore culpa? Debitis pariatur dolore delectus. Fugiat sequi maxime ab, minima illum dolorum doloribus eum error accusamus culpa est delectus ratione? Vel doloribus beatae minima, veniam non eius officiis pariatur a quibusdam voluptate repellendus neque repellat. Commodi, architecto ad, autem esse, itaque aspernatur vitae deleniti sit ut sint delectus ab nisi rem aliquid! Iure ab tempora suscipit voluptatem placeat optio inventore magnam nostrum ex et alias itaque delectus praesentium, illo voluptate similique enim? Dolore esse quasi, dicta, eos dolor minus nihil omnis adipisci maxime magnam architecto hic vitae, pariatur repellendus perspiciatis nulla. Eligendi, sunt a quia, rem reiciendis possimus temporibus earum officia animi architecto delectus. Alias debitis commodi vero deleniti in officiis accusantium itaque hic explicabo necessitatibus, cum suscipit dignissimos odio delectus animi quia? Maxime aliquam temporibus sapiente provident sit perferendis doloribus? Cupiditate nesciunt nemo cum velit accusamus recusandae sequi. Deleniti excepturi atque, doloremque dolores odio odit dolorem obcaecati ipsam cupiditate. Aspernatur a voluptas quia. Aperiam necessitatibus tenetur, blanditiis voluptatem officiis pariatur magni accusamus repudiandae atque vero omnis facilis reiciendis nemo minima itaque cum est expedita ex sequi ipsam dicta similique molestiae veritatis ullam! Harum temporibus dolorum non corporis saepe fugiat quae iure aut! Perferendis quidem quas nam corrupti laboriosam cumque ex! Corrupti cupiditate quisquam fugit odit id porro excepturi saepe quibusdam voluptatem eius error officia minima tempore magni facere, praesentium recusandae aut deserunt impedit blanditiis explicabo ex? Blanditiis voluptas repudiandae magnam debitis, voluptatum in illum exercitationem harum culpa quasi repellat praesentium consequuntur sunt molestias, aliquid facilis vel esse iste odit ex? Nam, quaerat odit? Non, deserunt modi iusto consectetur blanditiis numquam laboriosam. Reprehenderit veniam sed necessitatibus aut, eum natus suscipit culpa sequi nostrum quas earum amet rem eligendi illum modi, reiciendis corrupti voluptatem facilis distinctio quidem minus incidunt consequuntur dignissimos. Fugiat fuga earum nobis esse atque error quasi tempora eligendi, magni porro omnis maiores ipsum quia. Quidem assumenda, aliquam dicta at possimus omnis! Minima cupiditate harum labore officiis sint perspiciatis tempora quae vero vitae atque sed totam impedit commodi quis expedita, ullam molestias vel similique animi, repellat autem eos delectus. Vero iste dolore nobis magni perferendis deserunt ratione totam in! Quis deleniti sequi, deserunt, ipsum tempora numquam, unde fuga dignissimos dolor obcaecati praesentium assumenda minima itaque enim illum quod provident officia nobis odio ad! Libero sunt nostrum sed, nulla laborum dolor minus sint ad esse. Fugiat quidem laborum beatae blanditiis saepe animi repellendus eligendi nesciunt? Nesciunt a deserunt, quibusdam provident consectetur dolorum ullam porro eligendi ipsa modi cum quam laboriosam fuga sed repudiandae id? Reiciendis voluptate perspiciatis possimus earum temporibus autem dolores, repudiandae iure modi sint cumque. Cumque labore id nam officia soluta tempore facilis, ipsum dolorum modi reiciendis? Distinctio perspiciatis beatae consectetur voluptas aut, sit aperiam, commodi sunt dolorem laboriosam, id maxime tempora molestiae dignissimos tempore. Temporibus, assumenda corrupti in incidunt similique modi labore fugiat laboriosam voluptatem cupiditate earum numquam iste delectus pariatur dolores dolor deleniti fugit optio. Quia aliquid rerum laborum sapiente distinctio, ab magnam modi error. Eius, est? Officia assumenda in magnam ipsam ex recusandae dolor, tempore incidunt, quos ratione porro at eum dolores similique odio eligendi nesciunt consequuntur corporis dicta esse numquam, beatae quam ducimus? Ex aut modi quis quos sequi velit quo exercitationem sint nemo cupiditate similique molestias, adipisci minima ea fuga impedit, illum quasi fugiat natus. Dolorum consectetur aperiam tenetur minus id et quaerat dicta obcaecati sequi eos odio dolor expedita ipsum, eaque totam eveniet libero voluptate amet at illo! Voluptas, non reprehenderit, soluta asperiores voluptatum fugit, natus laborum repellendus modi itaque corporis laudantium possimus magni ducimus incidunt numquam rerum suscipit eligendi earum! Cum vel voluptatibus distinctio deserunt autem sequi est at magnam labore pariatur fugiat magni optio aliquam iure architecto sit sunt accusamus, quam soluta? Officiis impedit hic qui necessitatibus pariatur at sequi quidem dolorum iste! Vero harum aut autem cum sint temporibus amet! Fuga, et a. Nesciunt culpa nemo accusantium temporibus.',
            featured: true
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem impsum adipisicing Tempore, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, magni? Ducimus error odio ratione enim repellat dolorum aspernatur, assumenda ipsa esse maxime, delectus tempore consequatur dicta distinctio. Suscipit odit officia, provident quibusdam omnis quasi consequatur odio ut dolore veniam voluptatum, aperiam repudiandae totam soluta aut, veritatis impedit voluptate facilis accusamus iste. Repellendus ad nostrum cupiditate, sit rerum labore inventore itaque enim neque mollitia in delectus! Dolores, eaque, aliquid obcaecati eveniet placeat animi id aspernatur quidem fugiat aperiam aliquam provident consequuntur laboriosam ut commodi asperiores nemo quae magni deleniti earum quo voluptatem rerum. Sint unde modi asperiores ad ipsa fugiat totam minus doloribus rerum quos sequi voluptatibus, labore nisi nam. Provident, in! Culpa accusamus hic, ut voluptates autem itaque minus quibusdam est qui sint, tempora odio ab a, aliquid veniam tenetur doloribus aut. Incidunt officiis, veniam quae ipsum natus cumque tempore provident, aperiam magnam maxime soluta commodi nesciunt dolor inventore beatae? Recusandae ea asperiores temporibus quo corporis fugit dignissimos nemo autem iste. Consequuntur et deleniti dolore maiores voluptatem? Maiores iusto assumenda esse, ullam iste ea? Odio distinctio quo quod magni? Quo nemo sunt ea doloribus omnis, quod commodi esse, libero hic velit, cumque dolorum distinctio autem! Perspiciatis nulla molestiae eos ipsum magnam incidunt numquam sequi, nam provident maxime eaque neque soluta officiis maiores tempora quis labore quaerat temporibus tempore id adipisci. Dolores voluptatibus odio, nobis ut sint distinctio? Assumenda accusamus inventore tempora excepturi nam eum itaque aliquid molestias minima alias omnis debitis natus doloribus molestiae, ratione totam iure nemo explicabo delectus facilis! Repellat possimus autem nam quisquam ducimus excepturi porro, eos maxime totam ab quaerat quas eveniet corrupti saepe voluptatem labore! Expedita illo laboriosam eligendi vitae repudiandae tempore deserunt fugit eum, asperiores vel. Quia sunt, laboriosam exercitationem, iste numquam soluta, eum doloribus neque maiores voluptatibus dolorum nam similique. Eligendi saepe facilis fugiat, in harum quas unde ipsa molestiae repellat delectus. Aliquam harum recusandae quo ipsum et ipsa rem consequatur nisi obcaecati facilis enim, dolorum aliquid dolorem necessitatibus nesciunt quas corporis ea provident? Laborum dolor est facilis maiores, doloremque dignissimos? Ipsam nulla est tenetur nemo omnis! Similique neque, magnam velit ipsa, ex repudiandae laboriosam commodi illum temporibus ad iure omnis cumque accusantium aspernatur saepe quasi. Optio vero harum accusantium consectetur eveniet obcaecati nulla iure earum nisi molestias, eius laborum natus quisquam veniam eligendi consequuntur ipsum commodi? Sit quisquam saepe minus dolor dolores debitis, et eveniet hic id ad, illum nisi praesentium! Temporibus quidem aut, dolores maxime officiis ex quae ipsam libero maiores facilis, reprehenderit deserunt eos vel ullam laboriosam expedita! Illo quod perspiciatis eos natus magnam, libero ratione velit qui totam officiis voluptatibus excepturi perferendis expedita minima quisquam facilis fugiat architecto id incidunt consectetur officia et voluptatem sed. Hic voluptas rem deserunt impedit eligendi sit, necessitatibus exercitationem tenetur amet autem, explicabo est minus a. Fuga laborum doloribus perferendis commodi corporis tenetur? Sed ipsam repellat assumenda, dolor necessitatibus qui in odio deleniti eos quasi? Eum aut nisi impedit incidunt accusantium laboriosam officia quidem saepe est dolorum fuga, voluptatibus hic ullam nihil voluptas, deleniti magni explicabo aspernatur laborum, recusandae et! Deleniti quidem dolorem saepe, cum iste error? Porro in similique aperiam, incidunt consequuntur modi quos officia architecto. Quas dolorem tenetur blanditiis nostrum debitis facere consequatur! Id neque beatae sunt corporis dignissimos, iste eaque consequatur totam fugiat repellendus debitis laboriosam expedita quisquam voluptatibus magnam repellat doloribus. Laborum quos debitis, neque error a alias iure! Sapiente rerum quas eius eum voluptatibus officiis nobis a fugiat. Officia, laborum quaerat! Alias ratione, optio, culpa molestias nulla commodi fuga id numquam est in nesciunt doloremque dignissimos quae sapiente labore provident enim nobis temporibus eveniet aliquam expedita omnis cumque perspiciatis. Inventore illum repellendus blanditiis in quia id a fugit debitis iste! Animi, nemo est? Esse excepturi cum quasi. Delectus, pariatur. Quis eveniet, autem repudiandae alias totam, vero, quae soluta labore quos provident cumque. Vitae impedit explicabo fuga sequi. Totam, quisquam repellendus nobis ratione, iure aut at dolorem reiciendis ad labore rerum laboriosam repudiandae saepe tenetur! Fugit ab quibusdam dicta. Nulla, quos dignissimos et, asperiores atque doloribus laudantium cum quo laborum eius perspiciatis iusto repellendus fugiat vero nihil, voluptate ut! Officia provident quibusdam, non, praesentium quod porro beatae distinctio blanditiis harum magnam qui autem corrupti repellat itaque minima reprehenderit sit debitis reiciendis eaque a possimus quasi minus nemo. Dicta qui nihil harum nam fugiat vero natus aperiam repudiandae? Nemo numquam ea cum voluptatum odio dolores tempora animi provident, nisi iure quaerat molestias dolorem iusto ipsum vel asperiores est tenetur aliquam quae soluta itaque nulla aspernatur sint voluptas? Eos vel non quas autem, cum a modi impedit, laborum maxime culpa soluta dolorem deleniti, facilis cupiditate aut deserunt? Corporis labore dolor alias cumque praesentium esse odio harum at, perspiciatis facere pariatur laudantium sed possimus recusandae corrupti odit distinctio magni delectus facilis veniam? Similique quo animi ipsam hic nisi debitis molestias aperiam, atque minima nihil dolorum architecto necessitatibus magni nobis, earum rerum sint quibusdam totam? Magni dolor dolorem quia pariatur facilis sed perspiciatis doloribus est temporibus dignissimos nisi harum saepe minus consequuntur, voluptate suscipit, unde nemo dolore obcaecati hic reiciendis delectus. Fugiat reiciendis nam laborum nemo! Sit deserunt ea maiores ab, nam, qui necessitatibus beatae provident quos, labore non minima possimus eveniet quia velit magnam delectus esse quaerat accusamus. Nihil sunt eos, dignissimos aliquid fugiat quae numquam quidem vitae impedit, cupiditate nostrum aliquam vero tempora ullam obcaecati accusamus accusantium quis eveniet a libero atque qui porro dolor. Molestias est blanditiis enim eaque officiis dolorem?',
            featured: false
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur lorem elit Tempore, provident',
            date: storedDate,
            images: {
                image_1: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_2: {
                    image: 'https://via.placeholder.com/350x200',
                    alt: 'news' 
                },
                image_3: {
                    image: 'https://via.placeholder.com/1200x450',
                    alt: 'news'  
                }
            },
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem a quibusdam, in, aperiam molestias vel quisquam pariatur porro iure aut, nostrum consectetur enim laudantium tenetur! Qui quidem veritatis laborum voluptates repellat similique molestias, necessitatibus animi vero numquam vitae quo laudantium omnis consequatur, accusamus nulla illum aspernatur consequuntur, eos consectetur debitis atque cum ratione! Illum tempora harum soluta maiores. Cupiditate, corrupti dolores at unde eius animi incidunt? Sequi sunt nulla error expedita ipsum voluptatem doloremque autem quibusdam dolores amet. Illum facere repudiandae numquam incidunt id minus provident, laboriosam maxime exercitationem vero deserunt dolor veniam distinctio omnis tenetur consequatur nihil asperiores quidem. Delectus qui earum nesciunt quia deserunt ratione quae itaque, maxime neque possimus. Eos obcaecati quod, quibusdam illum officiis reiciendis. Incidunt unde repellendus delectus laudantium fugit accusamus illum ipsum doloremque autem dignissimos error quod eveniet dolorem nihil nemo animi tenetur, ratione aliquam pariatur qui adipisci soluta labore esse. Fugiat suscipit, odio, obcaecati, voluptate eos officia itaque labore voluptates quam praesentium possimus fugit aliquam minima ipsum similique nesciunt atque doloremque eaque non et perspiciatis! Laudantium nisi omnis aperiam temporibus ab amet doloribus, aspernatur, dolor, molestias corrupti saepe tempora optio error cupiditate sit blanditiis id labore fugiat maxime nesciunt. Nam quo rem possimus eaque molestiae perferendis, consequatur est laboriosam omnis accusantium! Fugit repellendus ut aliquam fuga recusandae sit voluptatum dicta provident minus quia molestias quibusdam exercitationem ullam incidunt veniam modi corporis optio iusto, distinctio odit alias iste? Autem facere, deserunt, repellendus velit quis, ex assumenda molestiae maiores expedita earum necessitatibus iusto totam possimus minus sit dolorem corrupti! Eos, reiciendis enim labore obcaecati dolorem cumque distinctio iusto incidunt nulla hic. Explicabo rem obcaecati magnam nisi, deleniti beatae aperiam, sequi architecto sed expedita dolor. Impedit numquam temporibus sint labore quo laboriosam assumenda non aut vel omnis dolorum voluptas ad sunt fugit sapiente qui doloribus, neque eveniet est at harum cumque, deleniti eum! Ut minus consectetur est! Aut dolorum quidem, eum minima hic repellat eligendi ut nostrum ullam accusamus! Voluptatum, nemo ratione. Aspernatur hic alias necessitatibus. Distinctio libero repellat assumenda consequuntur consequatur quo aliquam minima placeat tenetur tempore id exercitationem corporis, consectetur hic error odio veniam, nobis a dolor perspiciatis, porro accusamus excepturi! Ad error maxime iste ducimus, eius iusto nemo quasi atque consequatur itaque pariatur nesciunt reprehenderit, minus dolorem expedita dolorum non accusantium possimus ullam modi, nihil dignissimos laudantium. Quidem voluptatem delectus recusandae deserunt mollitia quis odio, cupiditate tempora praesentium corporis quas eligendi enim, necessitatibus quasi dolores aliquam esse explicabo modi ipsum dolor harum quaerat? Doloremque nesciunt veritatis iste animi est illum quisquam nam officia, alias illo quos quae sed quidem fugit numquam minima dolor vero assumenda obcaecati! Ut harum sint quaerat sequi facilis natus quia ad nobis et? Quas quia blanditiis in fuga ipsam nostrum accusamus repellat ullam corporis, maiores excepturi numquam voluptatum explicabo illo perferendis, dolorem sequi eaque id nisi alias, quos aliquid! Maxime quibusdam soluta quam qui illum obcaecati officia non facere maiores ab porro ratione accusantium, commodi dolore, blanditiis possimus illo fugit ut distinctio ad ipsa praesentium fuga laudantium omnis? Nobis dignissimos debitis et eligendi voluptas, quam porro similique blanditiis harum qui quasi quas officiis, vel quae fugiat quia quidem? Ipsa, iste eveniet necessitatibus nihil distinctio esse ipsam laborum nostrum minus tempore cupiditate veritatis iusto aliquam totam rerum deleniti culpa cum dicta consequuntur, voluptatum quas ea illo. Voluptatem nobis dolores at incidunt dolorem tenetur necessitatibus, architecto explicabo commodi praesentium possimus, asperiores consequuntur provident accusantium ratione obcaecati! Neque sit maxime dolorum, voluptatibus dolor perferendis aliquid inventore magnam eaque necessitatibus eligendi repellat, nemo saepe totam vitae culpa. Commodi, mollitia quibusdam? In laboriosam debitis, voluptatem, illum consequatur consequuntur accusantium earum nemo magnam ipsa vel? Numquam repellendus mollitia consequuntur! Voluptatem ab nisi voluptatum praesentium quibusdam dolorum eos, tempora eum, commodi, reiciendis aliquid voluptas non quam veritatis iste in iusto culpa dignissimos cumque pariatur aliquam! Illo officia qui mollitia tempora dolorum facere ducimus nisi voluptatum debitis. Repellendus, quo fugit velit laboriosam dolorum sed deleniti ut sapiente sint, saepe dolor quis nesciunt voluptate officia, quaerat reprehenderit doloribus praesentium! Architecto quia sed illo magnam voluptatem accusamus debitis placeat, quidem laboriosam ducimus, ex, minus quibusdam nisi. Rem, quaerat a nulla officia consequuntur autem similique consectetur ducimus eum nisi aliquid id debitis beatae non soluta facere hic, cupiditate molestias natus, commodi expedita impedit. Optio debitis vero amet? Sit commodi dicta labore qui magni aliquid quis sint est non voluptas aut maiores ad quidem dignissimos adipisci minima eaque laudantium fugit, cupiditate tempore voluptatum excepturi cumque eius reprehenderit. Mollitia, cupiditate. Voluptatibus eaque quidem molestiae cupiditate expedita animi, ipsa facilis similique nesciunt blanditiis possimus earum voluptatem quam commodi maxime sint nihil delectus itaque quo iusto deserunt. Qui temporibus, incidunt eum iusto nam ullam voluptatibus ad error ipsum minus perferendis alias ut nemo? Magnam, officiis officia saepe culpa, aliquam adipisci eum omnis eveniet id totam illum dolorem quibusdam excepturi facilis enim! Delectus, quod magni!',
            featured: false
        },
    ];

    const menuItems = [
        {to: '/', content: 'Home'},
        {to: '/latest', content: 'Latest'},
        {to: '/popular', content: 'Popular'},
        {to: '/news', content: 'News'},
        {to: '/about', content: 'About'},
    ];

    const [menuIsActive, setMenuIsActive] = useState(false);
	const [searchIsActive, setSearchIsActive] = useState(false);
	const [modalIsActive, setModalIsActive] = useState(false);

	const [yearValues, setYearValues] = useState([2012, new Date().getFullYear()]);
    const [ratingValues, setRatingValues] = useState([0, 10]);

    const genres = [
        'Action', 
        'Adventure', 
        'Biography', 
        'Crime', 
        'Comedy', 
        'Detective',
        'Documentary',
        'Drama',
        'Fantasy',
        'History',
        'Horror',
        'Melodrama',
        'Science fiction',
        'Sports',
        'Thriller',
    ];

    const [areGenresChecked, setAreGenresChecked] = useState(genres.reduce((obj, key) => {
        obj[key] = false;
        return obj;  
    }, {}));

    const genresUnchecked = genres.reduce((obj, key) => {
        obj[key] = false;
        return obj;  
    }, {});

    const myFilters = [
        {type: 'checkbox', title: 'Genres', defaultValues: genresUnchecked, setValues: setAreGenresChecked, items: genres, areChecked: areGenresChecked, setAreChecked: setAreGenresChecked},
        {type: 'range', title: 'Release year', defaultValues: [2012, new Date().getFullYear()], values: yearValues, setValues: setYearValues, stepValue: 1, minValue: 2012, maxValue: new Date().getFullYear()},
        {type: 'range', title: 'Rating', defaultValues: [0, 10], values: ratingValues, setValues: setRatingValues, stepValue: 1, minValue: 0, maxValue: 10 },
    ];

	const closedDropdowns = useMemo(() => {
		return myFilters.map(item => ({title: item.title, isActive: false}));
	}, []);

	const [dropdownsAreActive, setDropdownsAreActive] = useState(closedDropdowns);

	const toggleDropdown = title => {
		setDropdownsAreActive(dropdownsAreActive.map(item => (
			{
				...item, 
				isActive: item.title === title ? !item.isActive : false
			})));
		setSearchIsActive(false);
	};

	const [filtersAreActive, setFiltersAreActive] = useState(false);

	const yearFilteredMovies = useMemo(() => {
		const fullYearValues = [];
		for (let i = yearValues[0]; i <= yearValues[yearValues.length - 1]; i++) {
			fullYearValues.push(i);	
		} 
		return movies.filter(movie => fullYearValues.includes(movie.year));
	}, yearValues);

	const yearRatingFilteredMovies = useMemo(() => {
		const fullRatingValues = [];
		for (let i = ratingValues[0]; i <= ratingValues[ratingValues.length - 1]; i++) {
			fullRatingValues.push(i);	
		} 
		return yearFilteredMovies.filter(movie => fullRatingValues.includes(movie.rating));
	}, [yearFilteredMovies, ratingValues]);

	const yearRatingGenreFilteredMovies = useMemo(() => {
		return yearRatingFilteredMovies.filter(movie => movie.genres.some(genre => areGenresChecked[genre[0].toUpperCase() + genre.slice(1)]));
	}, [yearFilteredMovies, yearRatingFilteredMovies, areGenresChecked]);

	return (
		<div 
			className="App"
			onClick={() => {
				setSearchIsActive(false);
				setDropdownsAreActive(closedDropdowns);
			}}
		>
			<Routes>
				<Route 
					path="/" 
					element={
						<Layout 
							movies={movies}
                            menuItems={menuItems}
							searchIsActive={searchIsActive} 
							setSearchIsActive={setSearchIsActive}
                            setMenuIsActive={setMenuIsActive}
                            setModalIsActive={setModalIsActive}
							setDropdownsAreActive={setDropdownsAreActive}
							closedDropdowns={closedDropdowns}
						/>
					}
				>
					<Route index element={<HomePage 
											  movies={yearRatingGenreFilteredMovies}
											  news={news}
											  myFilters={myFilters}
											  toggleDropdown={toggleDropdown}
											  dropdownsAreActive={dropdownsAreActive}
											  setFiltersAreActive={setFiltersAreActive}
										  />} 
					/>
					<Route path="latest" element={<LatestPage 
														movies={movies}
													/>} 
					/>
					<Route path="popular" element={<PopularPage
														movies={movies}
					 								/>} 
					 />
					<Route path="news" element={<NewsPage 
													news={news}
												/>} 
					/>
					<Route path="about" element={<AboutPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="news/:id" element={<NewsPiecePage
                                                        news={news} 
                                                    />} />
					<Route path="movie/:id" element={<MoviePage 
                                                        movies={movies} 
                                                    />} 
                    />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
            <MyMenu 
                logo={logo} 
                items={menuItems} 
                isActive={menuIsActive} 
                setIsActive={setMenuIsActive} 
                setModalIsActive={setModalIsActive}
            />
            <MyModal 
                isActive={modalIsActive} 
                setIsActive={setModalIsActive}
                menuIsActive={menuIsActive} 
            >
                <GetUpdates />
            </MyModal>
			<MyFilters
				areActive={filtersAreActive} 
				setActive={setFiltersAreActive}
				myFilters={myFilters}
			/>
            <ScrollToTopButton filtersAreActive={filtersAreActive} />
		</div>
	);
}

export default App;

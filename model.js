const model = {
    app: {
        currentPage: [
            { id: 0, view: 'Intro'},
            { id: 1, view: 'Namegen'},
            { id: 2, view: 'Hideout'},
            { id: 3, view: 'About'},
        ]
    },
    inputs: {
        selFaction: '',
        selFactionDesc: '',
        selFactionLoc: '',
        factionData: '',
        hasUserPickedFaction: false,
    },
    data: {
        factions: [
            { id: 0, name: 'Loners', description: 'Loners (or Free Stalkers) are members of a leaderless commune of Stalkers in the Zone that tend to pursue their own ends independently of the agendas of other factions. Despite their independence, they have a loose set of guidelines (or a "code") which aims to avoid exploitation of other Stalkers, and promises exile to those who abuse their fellows.', locations: 'Rookie Village in Cordon', icon: './img/Loner.png', enemies: [] },
            { id: 1, name: 'Bandits', description: 'Bandits are an assortment of gangs with connection to organized crime back on the mainland. Made up largely of ex-cons and gangsters, some Bandits who were especially ambitious have made a good racket here in the Zone, just like the mob bosses back home. The only trouble is that very few people want an alliance with a bunch of violent thugs and robbers.', locations: 'Northern Factory in the Dark Valley', icon: './img/Bandits.png', enemies: [] },
            { id: 2, name: 'Clear Sky', description: 'Clear Sky is the remnants of the legendary (and mostly deceased) independent scientific group of the same name. Ideologically motivated, the members of Clear Sky want to truly understand the Zone, not caring for riches, fame or violence. They remain largely neutral to most factions, but will famously put up a hell of a fight if their territory is threatened.', locations: 'Hidden Headquarters in the Great Swamp', icon: './img/ClearSky.png', enemies: [] },
            { id: 3, name: 'Duty', description: 'Duty is a paramilitary faction with the primary goal of protecting the zone from external threats and maintaining order within its perimeter. Staffed largely by ex-military personnel, Duty is known for its professional demeanor and defensive capability. These traits come in handy in their long-term feud with the nearby anarchists known as Freedom.', locations: 'Rostok Factory', icon: './img/Duty.png', enemies: [] },
            { id: 4, name: 'Freedom', description: 'Freedom is an anarchist commune that values independence above all else. They oppose the influence of external powers, and have a particular distaste for government meddling. Freedom finds itself at odds with the disciplined paramilitary group known as duty Duty, but through use of guerilla tactics and sheer will Freedom holds out, even when odds are against them.', locations: 'Military Base in Army Warehouses', icon: ':/img/Freedom.png', enemies: [] },
            { id: 5, name: 'Mercenary', description: 'If there is one faction in this Zone that surpasses the immorality and greed of the Bandits, that would be this group of (mostly western) mercenaries. The nature of their contract is not known, nor is the identity of their employers. What is known is that the paycheck offered by these shadowy employers draws in infamously brutal foreign mercenaries.', locations: 'Sports Centre in the Dead City', icon: './img/Mercenary.png', enemies: [] },
            { id: 6, name: 'Military', description: 'The Ukrainian Military consists of soldiers, who are sent into the Zone to maintain order and prevent anyone from entering or leaving the area. The military faction is known for their use of heavy firepower, including Mil Mi-24 Hind attack choppers, which they use to maintain their dominance over the area.', locations: 'Research Institute in Agroprom', icon: 'img/Army.png', enemies: [] },
            { id: 7, name: 'Monolith', description: 'Monolithians are a group of brainwashed, fanatical worshipers who believe in the power of the Zone and seek to protect it at all costs. They are a pawn of the C-Consciousness, with its members brainwashed into serving the goals of a so-called higher power. Ruthless, and utterly loyal, the Monolith remains one of the most feared factions in the Zone.', locations: 'Palace of Culture in Pripyat', icon: './img/Monolith.png', enemies: [] },
            { id: 8, name: 'Ecologist', description: 'Ecologists are a group of scientists and researchers who are dedicated to studying the Zone and its Anomalies. They are equipped with scientific equipment such as their SSP-line of radiation suits, and other tools that allow them to explore the Zone safely. The Ecologists are a pacifistic faction, as they do not engage in combat, preferring to focus on their scientific research instead.', locations: 'Mobile Bunker in Lake Yantar', icon: './img/Ecologists.png', enemies: [] },
            { id: 9, name: 'Renegades', description: 'Renegades are a small, infamous group of outlaws. They were largely believed to be wiped out at the hands of Clear Sky, with whom they shared the marshlands. Rumors of their demise appear to have been exaggerated, however - Renegade outriders have once more begun to prowl the swamps, striking in the dead of night, leaving Stalker squads robbed of everything or dead on the spot.', locations: 'Tuzla Outpost in the Great Swamp', icon: './img/Renegades.png', enemies: [] },
            { id: 10, name: 'Sin', description: 'Sin is a group of religious, zombie-like fanatics who believed in the divine essence of the Zone. They seek to expand the Zone, eventually so that it spans the whole world. If you wander their territory and find the eyes of another human ahead of you in the half-light, turn and run: Sinners are anything but human - they are something else, something horrible.', locations: 'Mine Barracks in the Red Forest', icon: './img/SIN.png', enemies: [] },
            { id: 11, name: 'UNISG', description: 'The United Nations International Scientific Group or UNISG is a special forces unit, espionage group and research organization based in the Zone, focused on studying the anomalies and artifacts found within it. Their goals are unknown, The group has been suspected to have an avid and politically motivated interest in the Zone origins.', locations: 'Sawmill in Darkscape', icon: './img/UNISG.png', enemies: [] },
        ]
    }
}
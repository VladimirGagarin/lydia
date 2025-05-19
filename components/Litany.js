const Names = [
    {
        number: 'Litany',
        name: 'The Litany of Lydiah',
        description: 'A sacred offering of names — each a verse of beauty, strength, and eternal light.',
        image: require('../assets/litany-intro.jpg'), // make sure this image exists
    },
    {
        number: 1,
        name: 'Queen of Hearts',
        description: 'She reigns in the empire of love, with tenderness as her crown.',
        language: 'English',
        image: require('../assets/logo.jpg')
    },
    {
        number: 2,
        name: 'Φωτεινή Ψυχή (Phōteinḗ Psychḗ)',
        description: 'Moonlight of the soul, a glow even the stars bow to.',
        language: 'Greek',
        image: require('../assets/moonlight.jpg')
    },
    {
        number: 3,
        name: 'Custos Somniorum',
        description: 'Keeper of dreams, she walks gently through my slumber.',
        language: 'Latin',
        image: require('../assets/dream.jpg')
    },
    {
        number: 4,
        name: 'Liora — Angel of Light',
        description: 'She arrives like morning, her name whispered in gold.',
        language: 'Hebrew/English',
        image: require('../assets/light.jpg')
    },
    {
        number: 5,
        name: 'Mwangaza wa Dunia',
        description: 'Light of the world, and mine most of all.',
        language: 'Swahili',
        image: require('../assets/worldlight.jpg')
    },
    {
        number: 6,
        name: 'Dulce',
        description: 'Sweetness in a name — a whisper of joy in every syllable.',
        language: 'Spanish/Latin',
        image: require('../assets/dulce.jpg')
    },
    {
        number: 7,
        name: 'Cherie',
        description: 'Like the cherry blossom in spring — delicate and rare.',
        language: 'French',
        image: require('../assets/cherie.jpg')
    },
    {
        number: 8,
        name: 'Étoile',
        description: 'She is the star that guides me home.',
        language: 'French',
        image: require('../assets/etoile.jpg')
    },
    {
        number: 9,
        name: 'Fiore',
        description: 'A flower among stones — graceful, blooming, and eternal.',
        language: 'Italian',
        image: require('../assets/fiore.jpg')
    },
    {
        number: 10,
        name: 'Nuru',
        description: 'Light in Swahili — warm, constant, and full of hope.',
        language: 'Swahili',
        image: require('../assets/nuru.jpg')
    },
    {
        number: 11,
        name: 'Bella',
        description: 'Beauty not just in form, but in the way she touches the soul.',
        language: 'Italian',
        image: require('../assets/bella.jpg')
    },
    {
        number: 12,
        name: 'Amoura',
        description: 'The embodiment of love, carved into every heartbeat.',
        language: 'French-inspired',
        image: require('../assets/amoura.jpg')
    },
    {
        number: 13,
        name: 'Aurora',
        description: 'Like dawn breaking over darkness, she is the beginning of light.',
        language: 'Latin',
        image: require('../assets/aurora.jpg')
    },
    {
        number: 14,
        name: 'Ziya',
        description: 'Radiance, her aura glows even in silence.',
        language: 'Arabic',
        image: require('../assets/Ziya.jpg')
    },
    {
        number: 15,
        name: 'Sanaa',
        description: 'A work of art and heart — refined, elegant, powerful.',
        language: 'Swahili/Arabic',
        image: require('../assets/sanaa.jpg')
    },
    {
        number: 16,
        name: 'Stella',
        description: 'A guiding star in the velvet sky of my life.',
        language: 'Latin/Italian',
        image: require('../assets/stella.jpg')
    },
    {
        number: 17,
        name: 'Alba',
        description: 'Sunrise in her smile — soft, golden, promising.',
        language: 'Italian/Spanish',
        image: require('../assets/alba.jpg')
    },
    {
        number: 18,
        name: 'Malaika',
        description: 'Angel, protector, joy-bringer — her presence is divine.',
        language: 'Swahili',
        image: require('../assets/Malaika.jpg')
    },
    {
        number: 19,
        name: 'Élan',
        description: 'Grace in motion, energy in elegance.',
        language: 'French',
        image: require('../assets/elan.jpg')
    },
    {
        number: 20,
        name: 'Solène',
        description: 'Solemn beauty with a soul like candlelight in a cathedral.',
        language: 'French',
        image: require('../assets/solene.jpg')
        },
        {
        number: 21,
        name: 'Luz',
        description: 'Light in her name, warmth in her presence.',
        language: 'Spanish',
        image: require('../assets/Luz.jpg')
        },
        {
        number: 22,
        name: 'Calypso',
        description: 'Mystery of the sea, rhythm of the heart.',
        language: 'Greek Mythology',
        image: require('../assets/calypso.jpg')
        },
        {
        number: 23,
        name: 'Ayanna',
        description: 'A blooming flower — graceful and resilient.',
        language: 'African (Ethiopian)',
        image: require('../assets/ayanna.jpg')
        },
        {
        number: 24,
        name: 'Ishtar',
        description: 'Goddess of love and war — passion in every breath.',
        language: 'Akkadian/Mesopotamian',
        image: require('../assets/Ishtar.jpg')
        },
        {
        number: 25,
        name: 'Seraphina',
        description: 'Fiery angel, wrapped in elegance and strength.',
        language: 'Hebrew/Latin',
        image: require('../assets/seraphina.jpg')
        },
        {
        number: 26,
        name: 'Noor',
        description: 'Light, pure and unyielding — her soul shines.',
        language: 'Arabic',
        image: require('../assets/noor.jpg')
        },
        {
        number: 27,
        name: 'Elira',
        description: 'Freedom in a name, a melody in motion.',
        language: 'Albanian',
        image: require('../assets/elira.jpg')
        },
        {
        number: 28,
        name: 'Mireille',
        description: 'Delicate like lace, strong like oak — beauty with depth.',
        language: 'French',
        image: require('../assets/mireille.jpg')
        },
        {
        number: 29,
        name: 'Thando',
        description: 'Love — simple, powerful, eternal.',
        language: 'Zulu/Xhosa',
        image: require('../assets/thando.jpg')
        },
        {
        number: 30,
        name: 'Elysia',
        description: 'From the fields of heaven — peace surrounds her.',
        language: 'Greek (Elysium)',
        image: require('../assets/elysia.jpg')
        },
        {
        number: 31,
        name: 'Eidolon',
        description: 'A phantom of beauty, a vision that dances between worlds.',
        language: 'Greek',
        image: require('../assets/eidolon.jpg')
        },
        {
        number: 32,
        name: 'Celestia',
        description: 'She holds the heavens in her gaze, infinite and serene.',
        language: 'English (metaphorical)',
        image: require('../assets/celestia.jpg')
        },
        {
        number: 33,
        name: 'Vespera',
        description: 'Evening star that lights the soul’s twilight with soft grace.',
        language: 'Latin',
        image: require('../assets/vespera.jpg')
        },
        {
        number: 34,
        name: 'Amani',
        description: 'Peaceful strength that flows like a quiet river.',
        language: 'Swahili',
        image: require('../assets/amani.jpg')
        },
        {
        number: 35,
        name: 'Ember',
        description: 'The glowing heart of fire, constant beneath the ash.',
        language: 'English (metaphorical)',
        image: require('../assets/ember.jpg')
        },
        {
        number: 36,
        name: 'Nocturna',
        description: 'Mistress of night’s velvet, guardian of dreams and stars.',
        language: 'Latin',
        image: require('../assets/nocturna.jpg')
        },
        {
        number: 37,
        name: 'Soleil',
        description: 'Radiance bursting forth — warmth for all who seek her light.',
        language: 'French',
        image: require('../assets/soleil.jpg')
        },
        {
        number: 38,
        name: 'Zephyr',
        description: 'Gentle west wind, bringing whispers of change and freedom.',
        language: 'Greek',
        image: require('../assets/zephyr.jpg')
        },
        {
        number: 39,
        name: 'Serene',
        description: 'Calm presence that stills storms and anchors the soul.',
        language: 'English (metaphorical)',
        image: require('../assets/serene.jpg')
        },
        {
        number: 40,
        name: 'Naledi',
        description: 'Star in the vast sky — a guide for lost travelers.',
        language: 'Sotho/Tswana',
        image: require('../assets/naledi.jpg')
        },
    {
        number: 41,
        name: 'Saphira',
        description: 'Gem of the deep sky, shining with wisdom and mystery.',
        language: 'Inspired by Sapphire (English/metaphorical)',
        image: require('../assets/saphira.jpg')
        },
        {
        number: 42,
        name: 'Anahita',
        description: 'Goddess of waters and fertility, pure as the sacred river.',
        language: 'Persian',
        image: require('../assets/anahita.jpg')
        },
        {
        number: 43,
        name: 'Lumière',
        description: 'Light that dances softly through the dawn’s embrace.',
        language: 'French',
        image: require('../assets/lumiere.jpg')
        },
        {
        number: 44,
        name: 'Ishani',
        description: 'Divine flame — powerful, gentle, eternal.',
        language: 'Sanskrit',
        image: require('../assets/ishani.jpg')
        },
        {
        number: 45,
        name: 'Eira',
        description: 'Snow’s breath, silent and pure in the heart of winter.',
        language: 'Welsh',
        image: require('../assets/eira.jpg')
        },
        {
        number: 46,
        name: 'Faye',
        description: 'A whisper of magic and mystery in every moment.',
        language: 'English (metaphorical)',
        image: require('../assets/faye.jpg')
        },
        {
        number: 47,
        name: 'Zahara',
        description: 'Radiant flower blossoming under the desert sun.',
        language: 'Arabic',
        image: require('../assets/zahara.jpg')
        },
        {
        number: 48,
        name: 'Solace',
        description: 'Gentle refuge in the storm, a quiet peace in chaos.',
        language: 'English (metaphorical)',
        image: require('../assets/solace.jpg')
        },
        {
        number: 49,
        name: 'Isolde',
        description: 'A tragic beauty, timeless as the old ballads sung in twilight.',
        language: 'Old Germanic',
        image: require('../assets/isolde.jpg')
        },
        {
        number: 50,
        name: 'Noa',
        description: 'Movement like water — fluid, graceful, unstoppable.',
        language: 'Hebrew',
        image: require('../assets/noa.jpg')
        },
        {
        number: 51,
        name: 'Thalassa',
        description: 'The ocean’s soul — deep, wild, and nurturing.',
        language: 'Greek',
        image: require('../assets/thalassa.jpg')
        },
        {
        number: 52,
        name: 'Halo',
        description: 'Crowned in light, a divine presence unseen yet felt.',
        language: 'English (metaphorical)',
        image: require('../assets/hal.jpg')
        },
        {
        number: 53,
        name: 'Amara',
        description: 'Unfading grace — gentle and unbroken like a sacred vow.',
        language: 'Igbo/Sanskrit (multi-origin)',
        image: require('../assets/amara.jpg')
        },
        {
        number: 54,
        name: 'Solara',
        description: 'She who walks with the sun — radiant, life-giving, and untouchable.',
        language: 'Latin-inspired (solar)',
        image: require('../assets/solara.jpg')
        },
        {
        number: 55,
        name: 'Yuki',
        description: 'Snow in motion — soft, silent, pure.',
        language: 'Japanese',
        image: require('../assets/yuki.jpg')
        },
        {
        number: 56,
        name: 'Aether',
        description: 'Spirit of the upper sky — light that the gods inhale.',
        language: 'Greek (mythological)',
        image: require('../assets/aether.jpg')
        },
        {
        number: 57,
        name: 'Zoya',
        description: 'Life’s gift, blooming courage in a silent world.',
        language: 'Russian/Greek',
        image: require('../assets/zoya.jpg')
        },
        {
        number: 58,
        name: 'Grace',
        description: 'The presence that heals by simply being.',
        language: 'English (metaphorical)',
        image: require('../assets/grace.jpg')
        },
        {
        number: 59,
        name: 'Nefeli',
        description: 'The cloud — ever shifting, ever beautiful.',
        language: 'Greek',
        image: require('../assets/nefeli.jpg')
        },
        {
        number: 60,
        name: 'Aeliana',
        description: 'Sun-born, warm as eternity’s embrace.',
        language: 'Latin',
        image: require('../assets/aeliana.jpg')
        },
        {
        number: 61,
        name: 'Radiya',
        description: 'She who is content — her serenity shines brighter than gold.',
        language: 'Arabic',
        image: require('../assets/radiya.jpg')
        },
        {
        number: 62,
        name: 'Velora',
        description: 'She who wears valor like silk.',
        language: 'English (metaphorical)',
        image: require('../assets/velora.jpg')
        },
        {
        number: 63,
        name: 'Minerva',
        description: 'Wisdom cloaked in stillness.',
        language: 'Latin',
        image: require('../assets/minerva.jpg')
        },
        {
        number: 64,
        name: 'Ariadne',
        description: 'She weaves the way through any labyrinth.',
        language: 'Greek',
        image: require('../assets/ariadne.jpg')
        },
        {
        number: 65,
        name: 'Zawadi',
        description: 'A precious gift wrapped in grace and joy.',
        language: 'Swahili',
        image: require('../assets/zawadi.jpg')
        },
        {
        number: 66,
        name: 'Lyric',
        description: 'Her soul sings even in silence.',
        language: 'English (metaphorical)',
        image: require('../assets/lyric.jpg')
        },
        {
        number: 67,
        name: 'Ranya',
        description: 'A gaze that unravels the soul with kindness.',
        language: 'Arabic',
        image: require('../assets/ranya.jpg')
        },
        {
        number: 68,
        name: 'Kaimana',
        description: 'The power of the sea flowing through her veins.',
        language: 'Hawaiian',
        image: require('../assets/kaimana.jpg')
        },
        {
        number: 69,
        name: 'Émerance',
        description: 'A noble glow — rare, refined, and unforgettable.',
        language: 'French',
        image: require('../assets/emerance.jpg')
        },
        {
        number: 70,
        name: 'Solena',
        description: 'Moon’s twin — silent, strong, soft.',
        language: 'Latin-inspired',
        image: require('../assets/solena.jpg')
        },
        {
        number: 71,
        name: 'Aluna',
        description: 'Spirit of dreams and the deep earth.',
        language: 'Indigenous Colombian (Kogi)',
        image: require('../assets/aluna.jpg')
        },
        {
        number: 72,
        name: 'Wynter',
        description: 'Cold air, warm heart.',
        language: 'English (metaphorical)',
        image: require('../assets/wynter.jpg')
        },
        {
        number: 73,
        name: 'Naiya',
        description: 'A flowing melody of destiny and devotion.',
        language: 'Sanskrit-inspired',
        image: require('../assets/naiya.jpg')
        },
        {
        number: 74,
        name: 'Anemone',
        description: 'Like a flower that thrives in the wind — delicate, yet daring.',
        language: 'Greek/Latin botanical',
        image: require('../assets/anemone.jpg')
        },
        {
        number: 75,
        name: 'Soraya',
        description: 'Cluster of stars gathered in a name.',
        language: 'Persian/Arabic',
        image: require('../assets/soraya.jpg')
        },
        {
        number: 76,
        name: 'Seraphine',
        description: 'Touched by fire, veiled in light.',
        language: 'Hebrew/Latin blend',
        image: require('../assets/seraphine.jpg')
        },
        {
        number: 77,
        name: 'Dawn',
        description: 'First light that conquers darkness without a sword.',
        language: 'English (metaphorical)',
        image: require('../assets/dawn.jpg')
        },
        {
        number: 78,
        name: 'Zeraphiel',
        description: 'Heaven’s breath in motion — her name sings like a prayer.',
        language: 'Hebrew-inspired / Angelic',
        image: require('../assets/zeraphiel.jpg')
        },
        {
        number: 79,
        name: 'Yara',
        description: 'Water nymph of beauty and bravery.',
        language: 'Tupi/Brazilian',
        image: require('../assets/yara.jpg')
        },
        {
        number: 80,
        name: 'Neoma',
        description: 'New moon rising with ancient light.',
        language: 'Greek',
        image: require('../assets/neoma.jpg')
        },
        {
        number: 81,
        name: 'Samira',
        description: 'Evening companion — her words soothe like twilight.',
        language: 'Arabic',
        image: require('../assets/samira.jpg')
        },
        {
        number: 82,
        name: 'Caelum',
        description: 'Sky that listens to love.',
        language: 'Latin',
        image: require('../assets/caelum.jpg')
        },
        {
        number: 83,
        name: 'Lumina',
        description: 'She glows from within like a blessed lamp.',
        language: 'Latin-inspired',
        image: require('../assets/lumina.jpg')
        },
        {
        number: 84,
        name: 'Anise',
        description: 'Spice of sweetness and sudden joy.',
        language: 'English (metaphorical)',
        image: require('../assets/anise.jpg')
        },
        {
        number: 85,
        name: 'Zeren',
        description: 'Golden gazelle — swift and graceful.',
        language: 'Turkic',
        image: require('../assets/zeren.jpg')
        },
        {
        number: 86,
        name: 'Orielle',
        description: 'Golden dawn wrapped in grace — she is morning made eternal.',
        language: 'Hebrew/Latin fusion',
        image: require('../assets/orielle.jpg')
        },
        {
        number: 87,
        name: 'Orchid',
        description: 'Rare and exotic bloom in the garden of souls.',
        language: 'English (metaphorical)',
        image: require('../assets/orchid.jpg')
        },
        {
        number: 88,
        name: 'Iskra',
        description: 'A spark — small but mighty.',
        language: 'Slavic',
        image: require('../assets/iskra.jpg')
        },
        {
        number: 89,
        name: 'Aurelia',
        description: 'Golden soul with celestial grace.',
        language: 'Latin',
        image: require('../assets/aurelia.jpg')
        },
        {
        number: 90,
        name: 'Myst',
        description: 'Enigma wrapped in softness.',
        language: 'English (metaphorical)',
        image: require('../assets/myst.jpg')
        },
        {
        number: 91,
        name: 'Navah',
        description: 'A beautiful dwelling for the spirit.',
        language: 'Hebrew',
        image: require('../assets/navah.jpg')
        },
        {
        number: 92,
        name: 'Nayeli',
        description: 'I love you — spoken in every smile and every silence.',
        language: 'Zapotec (Indigenous Mexican)',
        image: require('../assets/nayeli.jpg')
        },
        {
        number: 93,
        name: 'Nova',
        description: 'A burst of beauty in the cosmic dark.',
        language: 'Latin (astronomy)',
        image: require('../assets/nova.jpg')
        },
        {
        number: 94,
        name: 'Azar',
        description: 'Fire keeper of ancient warmth.',
        language: 'Persian',
        image: require('../assets/azar.jpg')
        },
        {
        number: 95,
        name: 'Iris',
        description: 'The bridge between sky and earth.',
        language: 'Greek',
        image: require('../assets/iris.jpg')
        },
        {
        number: 96,
        name: 'Shira',
        description: 'A song made of sincerity.',
        language: 'Hebrew',
        image: require('../assets/shira.jpg')
        },
        {
        number: 97,
        name: 'Vela',
        description: 'Sail of the soul across quiet stars.',
        language: 'Latin',
        image: require('../assets/vela.jpg')
        },
        {
        number: 98,
        name: 'Rowan',
        description: 'The protector tree, standing in beauty.',
        language: 'Celtic/English',
        image: require('../assets/rowan.jpg')
        },
        {
        number: 99,
        name: 'Elpis',
        description: 'Hope — the last light in Pandora’s jar.',
        language: 'Greek',
        image: require('../assets/elpis.jpg')
        },



];

export default Names;

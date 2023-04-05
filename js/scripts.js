function preloader() {
    const imagesList = [
        './img/img-1.jpg',
        './img/img-2.jpg',
        './img/img-3.jpg',
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(
        `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`
    );
}
window.addEventListener('load', preloader);

const resource = [
    {
        headingContent: 'Wind Power',
        bodyText:
            "Wind power harnesses the kinetic energy of wind to generate electricity through wind turbines. It's a renewable and sustainable source of energy that's cost-effective, scalable, Clean energy is sustainable, renewable, and non-polluting. It includes solar, wind, hydro, geothermal, and bioenergy, and is vital for a healthier planet and future generations. and suitable for a range of applications. While there are some limitations, such as intermittency and noise pollution, wind power remains a promising alternative to non-renewable energy sources.",
        imgUrl: './img/img-1.jpg',
    },
    {
        headingContent: 'Solar Power',
        bodyText:
            "Solar power is a renewable and sustainable source of energy that generates electricity from sunlight using photovoltaic (PV) cells or solar thermal technology. It's a low maintenance, emission-free, and easy-to-install energy source that can power homes, businesses, and communities. The initial cost of installation may be high,Clean energy is sustainable, renewable, and non-polluting. It includes solar, wind, hydro, geothermal, and bioenergy, and is vital for a healthier planet and future generations. but long-term savings on energy bills and the positive impact on the environment make it a wise investment.",
        imgUrl: './img/img-2.jpg',
    },
    {
        headingContent: 'Our Solution',
        bodyText:
            'Clean energy refers to energy sources that are renewable, sustainable, and non-polluting. These include wind, solar, hydro, geothermal, and biomass energy. Clean energy is essential for mitigating the impacts of climate change, reducing carbon emissions, and transitioning to a more sustainable energy future. Clean energy is sustainable, renewable, and non-polluting. It includes solar, wind, hydro, geothermal, and bioenergy, and is vital for a healthier planet and future generations. The development and deployment of clean energy technologies are crucial for achieving global climate goals and ensuring a clean and healthy environment for future generations.',
        imgUrl: './img/img-3.jpg',
    },
];

const contentContainer = document.querySelector('.content-container');

const updateContent = (content) => {
    contentContainer.innerHTML = `
        <h1>${content.headingContent}</h1>
        <div class="maincontent">
            <div class="image-container">
                <img src="${content.imgUrl}" class>
            </div>
            <p>${content.bodyText}</p>
        </div>    
    `;
};

updateContent(resource[0]);

const buttons = document.querySelectorAll('.buttonprimary');

const handleSelection = (event) => {
    const clickedButton = event.target;

    buttons.forEach((button) => {
        if (button.hasAttribute('id')) {
            button.removeAttribute('id');
        }
    });

    clickedButton.setAttribute('id', 'active-button');

    let index;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === clickedButton) {
            index = i;
            break;
        }
    }

    updateContent(resource[index]);
};

buttons.forEach((button) => {
    button.addEventListener('click', handleSelection);
});

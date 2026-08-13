const facts = [
    "Antisemitism means prejudice against or hatred of Jewish people.",

    "Antisemitism has existed for thousands of years and has taken many different forms.",

    "The word 'antisemitism' was coined in German in the late 1800s.",

    "The Holocaust was the systematic, state-sponsored persecution and murder of six million European Jews by Nazi Germany and its allies and collaborators.",

    "Antisemitism can involve stereotypes, conspiracy theories, scapegoating, discrimination, and violence.",

    "Antisemitic ideas can be found among people from many different backgrounds and political perspectives.",

    "Antisemitism did not begin or end with the Holocaust.",

    "Education about Jewish history and antisemitism can help people recognize prejudice and challenge misinformation.",

    "The Nazis used longstanding antisemitic prejudices as part of their propaganda and persecution of Jewish people.",

    "Standing against antisemitism includes challenging stereotypes and treating Jewish people with dignity and respect."
];


function generateFact() {

    const factElement = document.getElementById("fact");

    const randomNumber = Math.floor(
        Math.random() * facts.length
    );

    factElement.textContent = facts[randomNumber];
}

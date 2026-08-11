fetch("data/quests.json")
    .then(response => response.json())
    .then(quests => {

        const container = document.getElementById("quest-list");

        quests.forEach(quest => {

            container.innerHTML += `
                <div class="quest">

                    <h2>📜 ${quest.name}</h2>

                    <span class="tag">
                        Level ${quest.level}
                    </span>

                    <span class="tag">
                        ${quest.race}
                    </span>

                    <span class="tag">
                        ${quest.class}
                    </span>

                    <p>
                        <b>NPC:</b> ${quest.npc}
                    </p>

                    <p>
                        <b>Location:</b> ${quest.location}
                    </p>

                    <p>
                        <b>Reward:</b> ${quest.reward}
                    </p>

                </div>
            `;

        });

    })
    .catch(error => {
        console.error("Error loading quests:", error);
    });

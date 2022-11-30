let compact = false;
glyphRef = document.getElementById("glyph");
addGlyphClickEvents(glyphRef);
glyphs = []
glyphDataIDs = []
glyphMenuElements = []
let duelRank = 100;
data = {
    // Types
    "Aqua": {
        "source":"aqua.png"
    },
    "Beast": {
        "source":"beast.png"
    },
    "Beast-Warrior": {
        "source":"beastwarrior.png"
    },
    "Dinosaur": {
        "source":"dinosaur.png"
    },
    "Dragon": {
        "source":"dragon.png"
    },
    "Power-Up": {
        "source":"equip.png"
    },
    "Fairy": {
        "source":"fairy.png"
    },
    "Fiend": {
        "source":"fiend.png"
    },
    "Fish": {
        "source":"fish.png"
    },
    "Insect": {
        "source":"insect.png"
    },
    "Machine": {
        "source":"machine.png"
    },
    "Magic": {
        "source":"magic.png"
    },
    "Plant": {
        "source":"plant.png"
    },
    "Pyro": {
        "source":"pyro.png"
    },
    "Reptile": {
        "source":"reptile.png"
    },
    "Ritual": {
        "source":"ritual.png"
    },
    "Rock": {
        "source":"rock.png"
    },
    "Sea-Serpent": {
        "source":"seaserpent.png"
    },
    "Spellcaster": {
        "source":"spellcaster.png"
    },
    "Thunder": {
        "source":"thunder.png"
    },
    "Trap": {
        "source":"trap.png"
    },
    "Warrior": {
        "source":"warrior.png"
    },
    "Winged-Beast": {
        "source":"wingedbeast.png"
    },
    "Zombie": {
        "source":"zombie.png"
    },
    // Cards
    "Acid Trap Hole": {
        "source":"acidtrap.png"
    },
    "Beast Fangs": {
        "source":"beastfangs.png"
    },
    "Bickuribox": {
        "source":"bickuribox.png"
    },
    "Blue-eyes White Dragon": {
        "source":"blueeyes.png"
    },
    "Bright Castle": {
        "source":"brightcastle.png"
    },
    "Crush Card": {
        "source":"crushcard.png"
    },
    "Dark Energy": {
        "source":"darkenergy.png"
    },
    "Dark Hole": {
        "source":"darkhole.png"
    },
    "Dark Magician": {
        "source":"darkmagician.png"
    },
    "Dragon Capture Jar": {
        "source":"dragoncapture.png"
    },
    "Dragon Treasure": {
        "source":"dragontreasure.png"
    },
    "Exodia the Forbidden One": {
        "source":"exodia.png"
    },
    "Fake Trap": {
        "source":"faketrap.png"
    },
    "Firewing Pegasus": {
        "source":"firewing.png"
    },
    "Forest": {
        "source":"forest.png"
    },
    "Gaia the Fierce Knight": {
        "source":"gaia.png"
    },
    "Harpie's Pet Dragon": {
        "source":"harpiespet.png"
    },
    "Kazejin": {
        "source":"kazejin.png"
    },
    "Labyrinth Tank": {
        "source":"labyrinthtank.png"
    },
    "Launcher Spider": {
        "source":"launcherspider.png"
    },
    "Megamorph": {
        "source":"megamorph.png"
    },
    "Metalzoa": {
        "source":"metalzoa.png"
    },
    "Meteor B. Dragon": {
        "source":"meteorb.png"
    },
    "Mountain": {
        "source":"mountain.png"
    },
    "Raigeki": {
        "source":"raigeki.png"
    },
    "Red-eyes B. Dragon": {
        "source":"redeyes.png"
    },
    "Sanga of the Thunder": {
        "source":"sanga.png"
    },
    "Skull Knight": {
        "source":"skullknight.png"
    },
    "Sogen": {
        "source":"sogen.png"
    },
    "Suijin": {
        "source":"suijin.png"
    },
    "Thunder Dragon": {
        "source":"thunderdragon.png"
    },
    "Umi": {
        "source":"umi.png"
    },
    "Wasteland": {
        "source":"wasteland.png"
    },
    "Widespread Ruin": {
        "source":"widespread.png"
    },
    "Yami": {
        "source":"yami.png"
    },
    "Zoa": {
        "source":"zoa.png"
    }
};
source = glyphRef.children[0].src;
path = source.substring(0, source.lastIndexOf('/'));
glyphRef.children[0].src = path + "/" + data[Object.keys(data)[19]]["source"];
glyphRef.data = 19;
glyphs.push(glyphRef);
assignIds();
createGlyphMenu(document.getElementById("columns"), 19)
createGlyph(4);
createGlyph(20);
createGlyph(5);
let starchips = 0;
animDisplay = false;



function getMaxIndex() {
    return Object.keys(data).length -1;
}

function createGlyphMenu(after, idToSelect=0) { // after is the element it should come after.
    let div = document.createElement("div");
    let menu = document.createElement("select");
    let label = document.createElement("label");
    label.innerHTML = "Glyph " + (parseInt(glyphMenuElements.length) + 1);
    div.appendChild(label);
    div.appendChild(menu);
    determineMenuOptions(menu, idToSelect);
    menu.style = "margin-left:6px";
    menu.data = glyphMenuElements.length;
    menu.id = glyphs[glyphMenuElements.length].id + "-menu";
    after.after(div);
    glyphMenuElements.push(div);
    menu.oninput = function() {
        changeGlyph(glyphs[menu.data], menu.selectedIndex);
    };
}

function determineMenuOptions(menu, idToSelect=0) {
    for (let i = 0; i < getMaxIndex()+1; i++) {
        newOption = document.createElement("option");
        newOption.innerHTML = Object.keys(data)[i];
        if (i == idToSelect) {
            newOption.selected = true;
        }
        menu.appendChild(newOption);
    }
}

function createGlyph(startImage = 0) {
    let glyph = glyphRef.cloneNode(true);
    let source = glyph.children[0].src;
    let path = source.substring(0, source.lastIndexOf('/'));
    glyph.children[0].src = path + "/" + data[Object.keys(data)[startImage]]["source"];
    glyph.data = startImage;
    glyphs[glyphs.length-1].after(glyph);
    glyphs.push(glyph);
    assignIds();
    addGlyphClickEvents(glyph);
    changeColumns();
    createGlyphMenu(glyphMenuElements[glyphMenuElements.length-1], startImage);
}

function deleteGlyph() {
    if (glyphs.length > 1) {
        glyph = glyphs.pop();
        glyph.remove();
    }
    if (glyphMenuElements.length > 1) {
        menu = glyphMenuElements.pop();
        menu.remove();
    }
    changeColumns();
}

function changeGlyph(glyph, id) {
    glyph.data = id;
    let source = glyph.children[0].src;
    let path = source.substring(0, source.lastIndexOf('/'));
    let imgSrc = path + "/" + data[Object.keys(data)[id]]["source"];
    glyph.children[0].src = imgSrc;
    let menuId = glyph.id + "-menu";
    document.getElementById(menuId).selectedIndex = id;
}

function addGlyphClickEvents(element) {
    element.addEventListener("contextmenu", e => e.preventDefault());
    element.onmousedown = function(e) {
        e.preventDefault();
        if (e.which == 1 && !e.altKey) { // Left Click Event
            if (e.ctrlKey) { // Change Image
                value = element.data;
                value += 1;
                if (value > getMaxIndex()) {
                    value = 0;
                }
                changeGlyph(element, value);      
            } else {
                value = parseInt(element.children[1].innerHTML);
                value += 1;
                if (value > 99) {
                    value = 99;
                }
                if (compact) {
                    if (value > 9) {
                        element.children[1].style.fontSize= "24px";
                        element.children[1].style.top= "8px";
                        element.children[1].style.left= "12px";
                    } else {
                        element.children[1].style.fontSize="24px";
                        element.children[1].style.top="8px";
                        element.children[1].style.left="26px";
                    }
                } else {
                    if (value > 9) {
                        element.children[1].style.left = "48px";
                    } else {
                        element.children[1].style.left = "70px";
                    }
                }
                element.children[1].innerHTML = value;
            }
        }
        if (e.which == 2 || e.altKey) { // Middle Click Event
            if (element.children.length < 3) {
                tier = document.getElementById("tier");
                newTier = tier.cloneNode(true);
                newTier.style.display = "block";
                newTier.style.position = "absolute";
                newTier.style.left="70px";
                newTier.style.top="2px";
                element.appendChild(newTier);
            } else {
                element.children[2].remove();
            }
            
        }
        if (e.which == 3) { // Right Click Event
            if (e.ctrlKey) { // Change Image
                value = element.data;
                value -= 1;
                if (value < 0) {
                    value = getMaxIndex();
                }
                changeGlyph(element, value);
            } else {
                value = parseInt(element.children[1].innerHTML);
                value -= 1;
                if (value < 0) {
                    value = 0;
                }
                if (compact) {
                    if (value > 9) {
                        element.children[1].style.fontSize= "24px";
                        element.children[1].style.top= "8px";
                        element.children[1].style.left= "12px";
                    } else {
                        element.children[1].style.fontSize="24px";
                        element.children[1].style.top="8px";
                        element.children[1].style.left="26px";
                    }
                } else {
                    if (value > 9) {
                        element.children[1].style.left = "48px";
                    } else {
                        element.children[1].style.left = "70px";
                    }
                }
                element.children[1].innerHTML = value;
            }
        }
    }
}

function changeColumns() {
    frame = document.getElementById("frame");
    amount = document.getElementById("columns").value;
    if (compact) {
        frame.style.width = amount * 40;
        rows = Math.floor((glyphs.length -1) / amount) + 1;
        frame.style.height = rows * 32;
    } else {
        frame.style.width = amount * 102;
        rows = Math.floor((glyphs.length -1) / amount) + 1;
        frame.style.height = rows * 96;
    }
}

function assignIds() {
    for (let i = 0; i < glyphs.length; i++) {
        glyphs[i].id = "glyph-" + i;
    }
}

starTrack = document.getElementById("starchip-tracker");
starTrack.addEventListener("contextmenu", e => e.preventDefault());
starTrack.onmousedown = function(event) {
    if (event.which == 1 && !event.altKey) {
        addStarchips(1);
    }
    if (event.which == 2 || event.altKey) {
        if (animDisplay === false) {
            document.getElementById("anim-0").style.display = "block";
            document.getElementById("anim-1").style.display = "block";
            document.getElementById("anim-2").style.display = "block";
            animDisplay = true;
        } else {
            document.getElementById("anim-0").style.display = "none";
            document.getElementById("anim-1").style.display = "none";
            document.getElementById("anim-2").style.display = "none";
            animDisplay = false;
        }
    }
    if (event.which == 3) {
        removeStarchips(1);
    }
};

starAdd = document.getElementById("starchip-adder");
for (let i = 0; i < starAdd.children.length; i++) {
    starAdd.children[i].onclick = function (event) {
        addStarchips(i+1);
    }
    starAdd.children[i].onmouseover = function (event) {
        for (let k = 0; k < i+1; k++) {
            starAdd.children[k].src = starAdd.children[k].src.replace("negative", "positive");
        }
    }
    starAdd.children[i].onmouseout = function (event) {
        for (let k = 0; k < i+1; k++) {
            starAdd.children[k].src = starAdd.children[k].src.replace("positive", "negative");
        }
    }
}

function addStarchips(amount=1) {
    starchips += amount;
    if (starchips > 999999) {
        starchips = 999999;
    }
    starTrack.children[1].innerHTML = "x " + starchips;
}

function removeStarchips(amount=1) {
    starchips -= amount;
    if (starchips < 0) {
        starchips = 0;
    }
    starTrack.children[1].innerHTML = "x " + starchips;
}

function calculateDuelRank() {
    duelRank = 50;
    condition = document.getElementById("rank-condition").selectedIndex;
    if (condition == 0) { // LP 0
        duelRank += 2;
    } else if (condition == 1) { // Deck out
        duelRank -= 40;
    } else { // Exodia the Forbidden One
        duelRank += 40;
    }
    
    turns = document.getElementById("rank-turns").value;
    if (turns < 5) {
        duelRank += 12;
    } else if (turns < 9) {
        duelRank += 8;
    } else if (turns < 29) {
        duelRank += 0;
    } else if (turns < 33) {
        duelRank -= 8;
    } else {
        duelRank -= 12;
    }
    effectives = document.getElementById("rank-effective").value;
    if (effectives < 2) {
        duelRank += 4;
    } else if (effectives < 4) {
        duelRank += 2;
    } else if (effectives < 10) {
        duelRank += 0;
    } else if (effectives < 20) {
        duelRank -= 2;
    } else {
        duelRank -= 4;
    }
    defends = document.getElementById("rank-defensive").value;
    if (defends < 2) {
        duelRank += 0;
    } else if (defends < 6) {
        duelRank -= 10;
    } else if (defends < 10) {
        duelRank -= 20;
    } else if (defends < 15) {
        duelRank -= 30;
    } else {
        duelRank -= 40;
    }
    facedowns = document.getElementById("rank-facedown").value;
    if (facedowns < 1) {
        duelRank += 0;
    } else if (facedowns < 11) {
        duelRank -= 2;
    } else if (facedowns < 21) {
        duelRank -= 4;
    } else if (facedowns < 31) {
        duelRank -= 6;
    } else {
        duelRank -= 8;
    }
    
    fusions = document.getElementById("rank-fusion").value;
    if (fusions < 1) {
        duelRank += 4;
    } else if (fusions < 5) {
        duelRank += 0;
    } else if (fusions < 10) {
        duelRank -= 4;
    } else if (fusions < 15) {
        duelRank -= 8;
    } else {
        duelRank -= 12;
    }
    equips = document.getElementById("rank-equip").value;
    if (equips < 1) {
        duelRank += 4;
    } else if (equips < 5) {
        duelRank += 0;
    } else if (equips < 10) {
        duelRank -= 4;
    } else if (equips < 15) {
        duelRank -= 8;
    } else {
        duelRank -= 12;
    }
    magics = document.getElementById("rank-pure").value;
    if (magics < 1) {
        duelRank += 2;
    } else if (magics < 4) {
        duelRank -= 4;
    } else if (magics < 7) {
        duelRank -= 8;
    } else if (magics < 10) {
        duelRank -= 12;
    } else {
        duelRank -= 16;
    }
    traps = document.getElementById("rank-trap").value;
    if (traps < 1) {
        duelRank += 2;
    } else if (traps < 3) {
        duelRank -= 8;
    } else if (traps < 5) {
        duelRank -= 16;
    } else if (traps < 7) {
        duelRank -= 24;
    } else {
        duelRank -= 32;
    }
    cardsLeft = document.getElementById("rank-left").value;
    if (cardsLeft < 4) {
        duelRank -= 7;
    } else if (cardsLeft < 8) {
        duelRank -= 5;
    } else if (cardsLeft < 28) {
        duelRank += 0;
    } else if (cardsLeft < 32) {
        duelRank += 12;
    } else {
        duelRank += 15;
    }
    lifepoints = document.getElementById("rank-lifepoints").selectedIndex;
    if (lifepoints == 0) { // 8000
        duelRank += 6;
    } else if (lifepoints == 1) { // 7000-7999
        duelRank += 4;
    } else if (lifepoints == 2) { // 1000-6999
        duelRank += 0;
    } else if (lifepoints == 3) { // 0100-0999
        duelRank -= 5;
    } else { // 0000-0099
        duelRank -= 7;
    }
    assignDuelRank();
}

function assignDuelRank() {
    let letter = document.getElementById("rank-letter");
    let style = document.getElementById("rank-style");
    let path = letter.src.substring(0, source.lastIndexOf('/'));
    if (duelRank > 49) {
        style.src = path + "/pow.png";
    } else {
        style.src = path + "/tec.png";
    }

    if (duelRank > 89) {
        letter.src = path + "/rankS.png";
    }
    else if (duelRank > 79) {
        letter.src = path + "/rankA.png";
    }
    else if (duelRank > 69) {
        letter.src = path + "/rankB.png";
    }
    else if (duelRank > 59) {
        letter.src = path + "/rankC.png";
    }
    else if (duelRank > 49) {
        letter.src = path + "/rankD.png";
    }
    else if (duelRank > 39) {
        letter.src = path + "/rankD.png";
    }
    else if (duelRank > 29) {
        letter.src = path + "/rankC.png";
    }
    else if (duelRank > 19) {
        letter.src = path + "/rankB.png";
    }
    else if (duelRank > 9) {
        letter.src = path + "/rankA.png";
    }
    else {
        letter.src = path + "/rankS.png";
    }
}

calculateDuelRank();

function changeBGColor(color) {
    hexColor = color.toString(16);
    document.body.style.backgroundColor = hexColor;
}

function changeFontColor(color) {
    hexColor = color.toString(16);
    document.body.style.color = hexColor;
}

function changeGlyphColor(color) {
    hexColor = color.toString(16);
    for (let i = 0; i < glyphs.length; i++) {
        glyphs[i].children[1].style.color = hexColor;
    }
    starTrack.children[1].style.color = hexColor;
}
startValues = []
duelRankControls = document.getElementsByClassName("duel-rank-control");
for (let i = 0; i < duelRankControls.length; i++) {
    startValues.push(duelRankControls[i].children[2].value);
    duelRankControls[i].addEventListener("contextmenu", e => e.preventDefault());
    duelRankControls[i].children[0].onmousedown = function(event) {
        event.preventDefault();
        if (event.which == 1 && !event.altKey) {
            if (duelRankControls[i].children[2].type === "number") {
                increaseValue(duelRankControls[i].children[2]);
            } else {
                if (duelRankControls[i].children[2].selectedIndex <= 3) {
                    duelRankControls[i].children[2].selectedIndex += 1;
                } else {
                    duelRankControls[i].children[2].selectedIndex = 0;
                }
            }
        }
        if (event.which == 2 || event.altKey) {
            if (duelRankControls[i].data !== "frozen") {
                duelRankControls[i].style.backgroundColor = "#00FFFFFF";
                duelRankControls[i].data = "frozen";
            } else {
                duelRankControls[i].style.backgroundColor = "#00000000";
                duelRankControls[i].data = "normal";
            }
        }
        if (event.which == 3) {
            if (duelRankControls[i].children[2].type === "number") {
                decreaseValue(duelRankControls[i].children[2]);
            } else {
                if (duelRankControls[i].children[2].selectedIndex > 0) {
                    duelRankControls[i].children[2].selectedIndex -= 1;
                } else {
                    duelRankControls[i].children[2].selectedIndex = 4;
                }
            }
        }
        calculateDuelRank();
    }
    duelRankControls[i].children[1].onmousedown = function(event) {
        event.preventDefault();
        if (event.which == 1 && !event.altKey) {
            if (duelRankControls[i].children[2].type === "number") {
                increaseValue(duelRankControls[i].children[2]);
            } else {
                if (duelRankControls[i].children[2].selectedIndex <= 3) {
                    duelRankControls[i].children[2].selectedIndex += 1;
                } else {
                    duelRankControls[i].children[2].selectedIndex = 0;
                }
            }
        }
        if (event.which == 2 || event.altKey) {
            if (duelRankControls[i].data !== "frozen") {
                duelRankControls[i].style.backgroundColor = "#00FFFFFF";
                duelRankControls[i].data = "frozen";
            } else {
                duelRankControls[i].style.backgroundColor = "#00000000";
                duelRankControls[i].data = "normal";
            }
        }
        if (event.which == 3) {
            if (duelRankControls[i].children[2].type === "number") {
                decreaseValue(duelRankControls[i].children[2]);
            } else {
                if (duelRankControls[i].children[2].selectedIndex > 0) {
                    duelRankControls[i].children[2].selectedIndex -= 1;
                } else {
                    duelRankControls[i].children[2].selectedIndex = 4;
                }
            }
        }
        calculateDuelRank();
    }
}

function increaseValue(element) {
    value = parseInt(element.value);
    if (value < element.max) {
        value += 1;
        element.value = value;
    }
}

function decreaseValue(element) {
    value = parseInt(element.value);
    value -= 1;
    if (value < 0) {
        element.value = 0;
    } else {
        element.value = value;
    }
}

function resetRank() {
    for (let i = 0; i < duelRankControls.length; i++) {
        if (duelRankControls[i].data !== "frozen") {
            duelRankControls[i].children[2].value = startValues[i];
        }
    }
    calculateDuelRank();
}

function changeArtMode() {
    compact = !compact;
    if (compact) {
        document.getElementById("mode-switch").innerHTML = "Compact";
        for (let i = 0; i < glyphs.length; i++) {
            glyphs[i].children[0].width="40";
            glyphs[i].children[0].height="32";
            glyphs[i].children[0].src=glyphs[i].children[0].src.replace("art", "artSmall");
            glyphs[i].children[1].style.fontSize = "24px";
            glyphs[i].children[1].style.top = "8px";
            if (parseInt(glyphs[i].children[1].innerHTML) >= 10) {
                glyphs[i].children[1].style.left= "12px";
            } else {
                glyphs[i].children[1].style.left = "26px";
            }
        }  
    } else {
        document.getElementById("mode-switch").innerHTML = "Standard";
        for (let i = 0; i < glyphs.length; i++) {
            glyphs[i].children[0].width="102";
            glyphs[i].children[0].height="96";
            glyphs[i].children[0].src=glyphs[i].children[0].src.replace("artSmall", "art");
            glyphs[i].children[1].style.fontSize = "48px";
            glyphs[i].children[1].style.top = "50px";
            if (parseInt(glyphs[i].children[1].innerHTML) >= 10) {
                glyphs[i].children[1].style.left = "48px";
            } else {
                glyphs[i].children[1].style.left = "70px";
            }
            
        }  
    }
    changeColumns();
}
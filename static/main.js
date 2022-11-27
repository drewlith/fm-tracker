glyphRef = document.getElementById("glyph");
addGlyphClickEvents(glyphRef);
glyphs = []
glyphDataIDs = []
starAnimCounter = 0;
data = {
    // Types
    0: {
        "glyphName":"Aqua",
        "imgSrc":"aqua.png",
        "password":00000000,
        //"equips":"No Equips",
        //"fusions":"No Fusions",
        //"password":00000000
    },
    1: {
        "glyphName":"Beast",
        "imgSrc":"beast.png"
    },
    2: {
        "glyphName":"Beast-Warrior",
        "imgSrc":"beastwarrior.png"
    },
    3: {
        "glyphName":"Dinosaur",
        "imgSrc":"dinosaur.png"
    },
    4: {
        "glyphName":"Dragon",
        "imgSrc":"dragon.png"
    },
    5: {
        "glyphName":"Power-Up",
        "imgSrc":"equip.png"
    },
    6: {
        "glyphName":"Fairy",
        "imgSrc":"fairy.png"
    },
    7: {
        "glyphName":"Fiend",
        "imgSrc":"fiend.png"
    },
    8: {
        "glyphName":"Fish",
        "imgSrc":"fish.png"
    },
    9: {
        "glyphName":"Insect",
        "imgSrc":"insect.png"
    },
    10: {
        "glyphName":"Machine",
        "imgSrc":"machine.png"
    },
    11: {
        "glyphName":"Magic",
        "imgSrc":"magic.png"
    },
    12: {
        "glyphName":"Plant",
        "imgSrc":"plant.png"
    },
    13: {
        "glyphName":"Pyro",
        "imgSrc":"pyro.png"
    },
    14: {
        "glyphName":"Reptile",
        "imgSrc":"reptile.png"
    },
    15: {
        "glyphName":"Ritual",
        "imgSrc":"ritual.png"
    },
    16: {
        "glyphName":"Rock",
        "imgSrc":"rock.png"
    },
    17: {
        "glyphName":"Sea-Serpent",
        "imgSrc":"seaserpent.png"
    },
    18: {
        "glyphName":"Spellcaster",
        "imgSrc":"spellcaster.png"
    },
    19: {
        "glyphName":"Thunder",
        "imgSrc":"thunder.png"
    },
    20: {
        "glyphName":"Trap",
        "imgSrc":"trap.png"
    },
    21: {
        "glyphName":"Warrior",
        "imgSrc":"warrior.png"
    },
    22: {
        "glyphName":"Winged-Beast",
        "imgSrc":"wingedbeast.png"
    },
    23: {
        "glyphName":"Zombie",
        "imgSrc":"zombie.png"
    },
    // Cards
    24: {
        "glyphName":"Beast Fangs",
        "imgSrc":"beastfangs.png"
    }
};
source = glyphRef.children[0].src;
path = source.substring(0, source.lastIndexOf('/'));
glyphRef.children[0].src = path + "/" + data[19]["imgSrc"];
glyphRef.data = 19;
glyphs.push(glyphRef);
createGlyph(4);
createGlyph(20);
createGlyph(5);
starchips = 0;
animDisplay = false;

function createGlyph(startImage = 0) {
    glyph = glyphRef.cloneNode(true);
    source = glyph.children[0].src;
    path = source.substring(0, source.lastIndexOf('/'));
    glyph.children[0].src = path + "/" + data[startImage]["imgSrc"];
    glyph.data = startImage;
    glyphs[glyphs.length-1].after(glyph);
    glyphs.push(glyph);
    assignIds();
    addGlyphClickEvents(glyph);
}

function deleteGlyph() {
    if (glyphs.length > 1) {
        glyph = glyphs.pop();
        glyph.remove();
    }
}

function addGlyphClickEvents(element) {
    element.addEventListener("contextmenu", e => e.preventDefault());
    element.onmousedown = function(e) {
        e.preventDefault();
        if (e.which == 1) { // Left Click Event
            value = parseInt(element.children[1].innerHTML);
            value += 1;
            if (value > 99) {
                value = 99;
            }
            if (value > 9) {
                element.children[1].style = "left:48px";
            } else {
                element.children[1].style = "left:70px";
            }
            element.children[1].innerHTML = value;
        }
        if (e.which == 2) { // Middle Click Event
            value = element.data;
            value += 1;
            if (value > 24) {
                value = 0;
            }
            element.data = value;
            element.children[0].src = path + "/" + data[value]["imgSrc"]
        }
        if (e.which == 3) { // Right Click Event
            value = parseInt(element.children[1].innerHTML);
            value -= 1;
            if (value < 0) {
                value = 0;
            }
            if (value > 9) {
                element.children[1].style = "left:48px";
            } else {
                element.children[1].style = "left:70px";
            }
            element.children[1].innerHTML = value;
        }
    }
}

function changeColumns() {
    frame = document.getElementById("frame");
    amount = document.getElementById("columns").value;
    frame.style.width = amount * 102;
}

function assignIds() {
    for (let i = 0; i < glyphs.length; i++) {
        glyphs[i].id = "glyph-" + i;
    }
}

starTrack = document.getElementById("starchip-tracker");
starTrack.addEventListener("contextmenu", e => e.preventDefault());
starTrack.onmousedown = function(event) {
    if (event.which == 1) {
        addStarchips(1);
    }
    if (event.which == 2) {
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
    starTrack.children[1].innerHTML = "x " + starchips;
}

function removeStarchips(amount=1) {
    starchips -= amount;
    if (starchips < 0) {
        starchips = 0;
    }
    starTrack.children[1].innerHTML = "x " + starchips;
}
const furnitureSofas = document.querySelectorAll(".furniture__sofas");
  const sofasTags = document.querySelectorAll(".furnitures-sofas");
  const sofasBtn = document.querySelectorAll(".sofas-btn");

  furnitureSofas.forEach(function(sofas) {
    sofas.addEventListener("change", function() {
      sofasTags.forEach(function(sofasTag) {
        sofasTag.classList.toggle("sofas-active")

      })
    })
  })

  sofasBtn.forEach(function(sofasBtns) {
    sofasBtns.addEventListener("click", function() {
      sofasTags.forEach(function(sofasDeleteClass) {
        sofasDeleteClass.classList.remove("sofas-active")

      })
      furnitureSofas.forEach(function(sofasInput) {
        if ( sofasInput.checked ) {
          sofasInput.checked = false
        }
      })
     })
  })

  const furnitureArmchair = document.querySelectorAll(".furniture__armchair");
  const archairTags = document.querySelectorAll(".furnitures-armchair");
  const archairBtn = document.querySelectorAll(".archair-btn");

  furnitureArmchair.forEach(function(archairs) {
    archairs.addEventListener("change", function() {
      archairTags.forEach(function(archairsTag) {
        archairsTag.classList.toggle("archair-active")
      })
    })
  })

  archairBtn.forEach(function(archairBtns) {
    archairBtns.addEventListener("click", function() {
      archairTags.forEach(function(armchairDeleteClass) {
        armchairDeleteClass.classList.remove("archair-active")
      })
      furnitureArmchair.forEach(function(archairsInput) {
        if ( archairsInput.checked ) {
          archairsInput.checked = false
        }
      })
    })
  })

  const furniturePoufs = document.querySelectorAll(".furniture__poufs");
  const poufsTags = document.querySelectorAll(".furnitures-poufs");
  const poufsBtn = document.querySelectorAll(".poufs-btn");

  furniturePoufs.forEach(function(poufs) {
    poufs.addEventListener("change", function() {
      poufsTags.forEach(function(poufsTag) {
        poufsTag.classList.toggle("poufs-active")
      })
    })
  })

  poufsBtn.forEach(function(poufsBtns) {
    poufsBtns.addEventListener("click", function() {
      poufsTags.forEach(function(poufsDeleteClass) {
        poufsDeleteClass.classList.remove("poufs-active")
      })
      furniturePoufs.forEach(function(poufsInput) {
        if ( poufsInput.checked ) {
          poufsInput.checked = false
        }
      })
    })
  })

  const furnitureBeds = document.querySelectorAll(".furniture__beds");
  const bedsTags = document.querySelectorAll(".furnitures-beds");
  const bedsBtn = document.querySelectorAll(".beds-btn");

  furnitureBeds.forEach(function(beds) {
    beds.addEventListener("change", function() {
      bedsTags.forEach(function(bedsTag) {
        bedsTag.classList.toggle("beds-active")
      })
    })
  })

  bedsBtn.forEach(function(bedsBtns) {
    bedsBtns.addEventListener("click", function() {
      bedsTags.forEach(function(bedsDeleteClass) {
        bedsDeleteClass.classList.remove("beds-active")
      })
      furnitureBeds.forEach(function(bedsInput) {
        if ( bedsInput.checked ) {
          bedsInput.checked = false
        }
      })
    })
  })

  const furniturePedestals = document.querySelectorAll(".furniture__pedestals");
  const pedestalsTags = document.querySelectorAll(".furnitures-pedestals");
  const pedestalsBtn = document.querySelectorAll(".pedestals-btn");

  furniturePedestals.forEach(function(pedestals) {
    pedestals.addEventListener("change", function() {
      pedestalsTags.forEach(function(pedestalsTag) {
        pedestalsTag.classList.toggle("pedestals-active")
      })
    })
  })

  pedestalsBtn.forEach(function(pedestalsBtns) {
    pedestalsBtns.addEventListener("click", function() {
      pedestalsTags.forEach(function(pedestalsDeleteClass) {
        pedestalsDeleteClass.classList.remove("pedestals-active")
      })
      furniturePedestals.forEach(function(pedestalsInput) {
        if ( pedestalsInput.checked ) {
          pedestalsInput.checked = false
        }
      })
    })
  })

  const furnitureCommode = document.querySelectorAll(".furniture__commode");
  const commodeTags = document.querySelectorAll(".furnitures-commode");
  const commodeBtn = document.querySelectorAll(".commode-btn");

  furnitureCommode.forEach(function(commode) {
    commode.addEventListener("change", function() {
      commodeTags.forEach(function(commodeTag) {
        commodeTag.classList.toggle("commode-active")
      })
    })
  })

  commodeBtn.forEach(function(commodeBtns) {
    commodeBtns.addEventListener("click", function() {
      commodeTags.forEach(function(commodeDeleteClass) {
        commodeDeleteClass.classList.remove("commode-active")
      })
      furnitureCommode.forEach(function(commodeInput) {
        if ( commodeInput.checked ) {
          commodeInput.checked = false
        }
      })
    })
  })

  const furnitureChair = document.querySelectorAll(".furniture__chair");
  const chairTags = document.querySelectorAll(".furnitures-chairs");
  const chairBtn = document.querySelectorAll(".chairs-btn");

  furnitureChair.forEach(function(chair) {
    chair.addEventListener("change", function() {
      chairTags.forEach(function(chairTag) {
        chairTag.classList.toggle("chairs-active")
      })
    })
  })

  chairBtn.forEach(function(chairBtns) {
    chairBtns.addEventListener("click", function() {
      chairTags.forEach(function(chairDeleteClass) {
        chairDeleteClass.classList.remove("chairs-active")
      })
      furnitureChair.forEach(function(chairInput) {
        if ( chairInput.checked ) {
          chairInput.checked = false
        }
      })
    })
  })

  const furnitureDesk = document.querySelectorAll(".furniture__desk");
  const deskTags = document.querySelectorAll(".furnitures-desk");
  const deskBtn = document.querySelectorAll(".desk-btn");

  furnitureDesk.forEach(function(desk) {
    desk.addEventListener("change", function() {
      deskTags.forEach(function(deskTag) {
        deskTag.classList.toggle("chairs-active")
      })
    })
  })

  deskBtn.forEach(function(deskBtns) {
    deskBtns.addEventListener("click", function() {
      deskTags.forEach(function(deskDeleteClass) {
        deskDeleteClass.classList.remove("chairs-active")
      })
      furnitureDesk.forEach(function(deskInput) {
        if ( deskInput.checked ) {
          deskInput.checked = false
        }
      })
    })
  })

  const furnitureAccessories = document.querySelectorAll(".furniture__accessories");
  const accessoriesTags = document.querySelectorAll(".furnitures-accessories");
  const accessoriesBtn = document.querySelectorAll(".accessories-btn");

  furnitureAccessories.forEach(function(accessories) {
    accessories.addEventListener("change", function() {
      accessoriesTags.forEach(function(accessoriesTag) {
        accessoriesTag.classList.toggle("accessories-active")
      })
    })
  })

  accessoriesBtn.forEach(function(accessoriesBtns) {
    accessoriesBtns.addEventListener("click", function() {
      accessoriesTags.forEach(function(accessoriesDeleteClass) {
        accessoriesDeleteClass.classList.remove("accessories-active")
      })
      furnitureAccessories.forEach(function(accessoriesInput) {
        if ( accessoriesInput.checked ) {
          accessoriesInput.checked = false
        }
      })
    })
  })

  const furnitureStraightsofas = document.querySelectorAll(".furniture__straightsofas");
  const straightsofasTags = document.querySelectorAll(".furnitures-straightsofas");
  const straightsofasBtn = document.querySelectorAll(".straightsofas-btn");

  furnitureStraightsofas.forEach(function(straightsofas) {
    straightsofas.addEventListener("change", function() {
      straightsofasTags.forEach(function(straightsofasTag) {
        straightsofasTag.classList.toggle("straightsofas-active")
      })
    })
  })

  straightsofasBtn.forEach(function(straightsofasBtns) {
    straightsofasBtns.addEventListener("click", function() {
      straightsofasTags.forEach(function(straightsofasDeleteClass) {
        straightsofasDeleteClass.classList.remove("straightsofas-active")
      })
      furnitureStraightsofas.forEach(function(straightsofasInput) {
        if ( straightsofasInput.checked ) {
          straightsofasInput.checked = false
        }
      })
    })
  })

  const furnitureCornersofas = document.querySelectorAll(".furniture__cornersofas");
  const cornersofasTags = document.querySelectorAll(".furnitures-cornersofas");
  const cornersofasBtn = document.querySelectorAll(".cornersofas-btn");

  furnitureCornersofas.forEach(function(cornersofas) {
    cornersofas.addEventListener("change", function() {
      cornersofasTags.forEach(function(cornersofasTag) {
        cornersofasTag.classList.toggle("cornersofas-active")
      })
    })
  })

  cornersofasBtn.forEach(function(cornersofasBtns) {
    cornersofasBtns.addEventListener("click", function() {
      cornersofasTags.forEach(function(cornersofasDeleteClass) {
        cornersofasDeleteClass.classList.remove("cornersofas-active")
      })
      furnitureCornersofas.forEach(function(cornersofasInput) {
        if ( cornersofasInput.checked ) {
          cornersofasInput.checked = false
        }
      })
    })
  })

  const furnitureModularsofas = document.querySelectorAll(".furniture__modularsofas");
  const modularsofasTags = document.querySelectorAll(".furnitures-modularsofas");
  const modularsofasBtn = document.querySelectorAll(".modularsofas-btn");

  furnitureModularsofas.forEach(function(modularsofas) {
    modularsofas.addEventListener("change", function() {
      modularsofasTags.forEach(function(modularsofasTag) {
        modularsofasTag.classList.toggle("modularsofas-active")
      })
    })
  })

  modularsofasBtn.forEach(function(modularsofasBtns) {
    modularsofasBtns.addEventListener("click", function() {
      modularsofasTags.forEach(function(modularsofasDeleteClass) {
        modularsofasDeleteClass.classList.remove("modularsofas-active")
      })
      furnitureModularsofas.forEach(function(modularsofasInput) {
        if ( modularsofasInput.checked ) {
          modularsofasInput.checked = false
        }
      })
    })
  })

  const furnitureLeatherettesofas = document.querySelectorAll(".furniture__leatherettesofas");
  const leatherettesofasTags = document.querySelectorAll(".furnitures-leatherettesofas");
  const leatherettesofasBtn = document.querySelectorAll(".leatherettesofas-btn");

  furnitureLeatherettesofas.forEach(function(leatherettesofas) {
    leatherettesofas.addEventListener("change", function() {
      leatherettesofasTags.forEach(function(leatherettesofasTag) {
        leatherettesofasTag.classList.toggle("leatherettesofas-active")
      })
    })
  })

  leatherettesofasBtn.forEach(function(leatherettesofasBtns) {
    leatherettesofasBtns.addEventListener("click", function() {
      leatherettesofasTags.forEach(function(leatherettesofasDeleteClass) {
        leatherettesofasDeleteClass.classList.remove("leatherettesofas-active")
      })
      furnitureLeatherettesofas.forEach(function(leatherettesofasInput) {
        if ( leatherettesofasInput.checked ) {
          leatherettesofasInput.checked = false
        }
      })
    })
  })

  const furnitureUpholsteredarmchairs = document.querySelectorAll(".furniture__upholsteredarmchairs");
  const upholsteredarmchairsTags = document.querySelectorAll(".furnitures-upholsteredarmchairs");
  const upholsteredarmchairsBtn = document.querySelectorAll(".upholsteredarmchairs-btn");

  furnitureUpholsteredarmchairs.forEach(function(upholsteredarmchairs) {
    upholsteredarmchairs.addEventListener("change", function() {
      upholsteredarmchairsTags.forEach(function(upholsteredarmchairsTag) {
        upholsteredarmchairsTag.classList.toggle("upholsteredarmchairs-active")
      })
    })
  })

  upholsteredarmchairsBtn.forEach(function(upholsteredarmchairsBtns) {
    upholsteredarmchairsBtns.addEventListener("click", function() {
      upholsteredarmchairsTags.forEach(function(upholsteredarmchairsDeleteClass) {
        upholsteredarmchairsDeleteClass.classList.remove("upholsteredarmchairs-active")
      })
      furnitureUpholsteredarmchairs.forEach(function(upholsteredarmchairsInput) {
        if ( upholsteredarmchairsInput.checked ) {
          upholsteredarmchairsInput.checked = false
        }
      })
    })
  })

  const furnitureChairbeds = document.querySelectorAll(".furniture__chairbeds");
  const chairbedsTags = document.querySelectorAll(".furnitures-chairbeds");
  const chairbedsBtn = document.querySelectorAll(".chairbeds-btn");

  furnitureChairbeds.forEach(function(chairbeds) {
    chairbeds.addEventListener("change", function() {
      chairbedsTags.forEach(function(chairbedsTag) {
        chairbedsTag.classList.toggle("chairbeds-active")
      })
    })
  })

  chairbedsBtn.forEach(function(chairbedsBtns) {
    chairbedsBtns.addEventListener("click", function() {
      chairbedsTags.forEach(function(chairbedsDeleteClass) {
        chairbedsDeleteClass.classList.remove("chairbeds-active")
      })
      furnitureChairbeds.forEach(function(chairbedsInput) {
        if ( chairbedsInput.checked ) {
          chairbedsInput.checked = false
        }
      })
    })
  })

  const furnitureSinglebeds = document.querySelectorAll(".furniture__singlebeds");
  const singlebedsTags = document.querySelectorAll(".furnitures-singlebeds");
  const singlebedsBtn = document.querySelectorAll(".singlebeds-btn");

  furnitureSinglebeds.forEach(function(singlebeds) {
    singlebeds.addEventListener("change", function() {
      singlebedsTags.forEach(function(singlebedsTag) {
        singlebedsTag.classList.toggle("singlebeds-active")
      })
    })
  })

  singlebedsBtn.forEach(function(singlebedsBtns) {
    singlebedsBtns.addEventListener("click", function() {
      singlebedsTags.forEach(function(singlebedsDeleteClass) {
        singlebedsDeleteClass.classList.remove("singlebeds-active")
      })
      furnitureSinglebeds.forEach(function(singlebedsInput) {
        if ( singlebedsInput.checked ) {
          singlebedsInput.checked = false
        }
      })
    })
  })

  const furnitureDoublebeds = document.querySelectorAll(".furniture__doublebeds");
  const doublebedsTags = document.querySelectorAll(".furnitures-doublebeds");
  const doublebedsBtn = document.querySelectorAll(".doublebeds-btn");

  furnitureDoublebeds.forEach(function(doublebeds) {
    doublebeds.addEventListener("change", function() {
      doublebedsTags.forEach(function(doublebedsTag) {
        doublebedsTag.classList.toggle("doublebeds-active")
      })
    })
  })

  doublebedsBtn.forEach(function(doublebedsBtns) {
    doublebedsBtns.addEventListener("click", function() {
      doublebedsTags.forEach(function(doublebedsDeleteClass) {
        doublebedsDeleteClass.classList.remove("doublebeds-active")
      })
      furnitureDoublebeds.forEach(function(doublebedsInput) {
        if ( doublebedsInput.checked ) {
          doublebedsInput.checked = false
        }
      })
    })
  })

  const furnitureWoodenchairs = document.querySelectorAll(".furniture__woodenchairs");
  const woodenchairsTags = document.querySelectorAll(".furnitures-woodenchairs");
  const woodenchairsBtn = document.querySelectorAll(".woodenchairs-btn");

  furnitureWoodenchairs.forEach(function(woodenchairs) {
    woodenchairs.addEventListener("change", function() {
      woodenchairsTags.forEach(function(woodenchairsTag) {
        woodenchairsTag.classList.toggle("woodenchairs-active")
      })
    })
  })

  woodenchairsBtn.forEach(function(woodenchairsBtns) {
    woodenchairsBtns.addEventListener("click", function() {
      woodenchairsTags.forEach(function(woodenchairsDeleteClass) {
        woodenchairsDeleteClass.classList.remove("woodenchairs-active")
      })
      furnitureWoodenchairs.forEach(function(woodenchairsInput) {
        if ( woodenchairsInput.checked ) {
          woodenchairsInput.checked = false
        }
      })
    })
  })

  const furnitureMetalchairs = document.querySelectorAll(".furniture__metalchairs");
  const metalchairsTags = document.querySelectorAll(".furnitures-metalchairs");
  const metalchairsBtn = document.querySelectorAll(".metalchairs-btn");

  furnitureMetalchairs.forEach(function(metalchairs) {
    metalchairs.addEventListener("change", function() {
      metalchairsTags.forEach(function(metalchairsTag) {
        metalchairsTag.classList.toggle("metalchairs-active")
      })
    })
  })

  metalchairsBtn.forEach(function(metalchairsBtns) {
    metalchairsBtns.addEventListener("click", function() {
      metalchairsTags.forEach(function(metalchairsDeleteClass) {
        metalchairsDeleteClass.classList.remove("metalchairs-active")
      })
      furnitureMetalchairs.forEach(function(metalchairsInput) {
        if ( metalchairsInput.checked ) {
          metalchairsInput.checked = false
        }
      })
    })
  })

  const furnitureAlarmclocks = document.querySelectorAll(".furniture__alarmclocks");
  const alarmclocksTags = document.querySelectorAll(".furnitures-alarmclocks");
  const alarmclocksBtn = document.querySelectorAll(".alarmclocks-btn");

  furnitureAlarmclocks.forEach(function(alarmclocks) {
    alarmclocks.addEventListener("change", function() {
      alarmclocksTags.forEach(function(alarmclocksTag) {
        alarmclocksTag.classList.toggle("alarmclocks-active")
      })
    })
  })

  alarmclocksBtn.forEach(function(alarmclocksBtns) {
    alarmclocksBtns.addEventListener("click", function() {
      alarmclocksTags.forEach(function(alarmclocksDeleteClass) {
        alarmclocksDeleteClass.classList.remove("alarmclocks-active")
      })
      furnitureAlarmclocks.forEach(function(alarmclocksInput) {
        if ( alarmclocksInput.checked ) {
          alarmclocksInput.checked = false
        }
      })
    })
  })

  const furnitureSculptures = document.querySelectorAll(".furniture__sculptures");
  const sculpturesTags = document.querySelectorAll(".furnitures-sculptures");
  const sculpturesBtn = document.querySelectorAll(".sculptures-btn");

  furnitureSculptures.forEach(function(sculptures) {
    sculptures.addEventListener("change", function() {
      sculpturesTags.forEach(function(sculpturesTag) {
        sculpturesTag.classList.toggle("sculptures-active")
      })
    })
  })

  sculpturesBtn.forEach(function(sculpturesBtns) {
    sculpturesBtns.addEventListener("click", function() {
      sculpturesTags.forEach(function(sculpturesDeleteClass) {
        sculpturesDeleteClass.classList.remove("sculptures-active")
      })
      furnitureSculptures.forEach(function(sculpturesInput) {
        if ( sculpturesInput.checked ) {
          sculpturesInput.checked = false
        }
      })
    })
  })

  const inputPrc = document.getElementById("second-price");
  const priceTags = document.querySelectorAll(".tag-price");
  const priceBtn = document.querySelectorAll(".prc-btn");

  inputPrc.addEventListener("change", function() {
      priceTags.forEach(function(priceTag) {
        priceTag.classList.add("price-active")
      })
  })

  priceBtn.forEach(function(priceBtns) {
    priceBtns.addEventListener("click", function() {
      priceTags.forEach(function(priceDeleteClass) {
        priceDeleteClass.classList.remove("price-active")
        inputPrc.value = ""
      })
    })
  })

  const morediscount = document.querySelectorAll(".catalog__more");
  const morediscountTags = document.querySelectorAll(".morediscount");
  const morediscountBtn = document.querySelectorAll(".morediscount-btn");

  morediscount.forEach(function(morediscount) {
    morediscount.addEventListener("change", function() {
      morediscountTags.forEach(function(morediscountTag) {
        morediscountTag.classList.toggle("morediscount-active")
      })
    })
  })

  morediscountBtn.forEach(function(morediscountBtns) {
    morediscountBtns.addEventListener("click", function() {
      morediscountTags.forEach(function(morediscountDeleteClass) {
        morediscountDeleteClass.classList.remove("morediscount-active")
      })
      morediscount.forEach(function(morediscountInput) {
        if ( morediscountInput.checked ) {
          morediscountInput.checked = false
        }
      })
    })
  })

  const lessdiscount = document.querySelectorAll(".catalog__less");
  const lessdiscountTags = document.querySelectorAll(".lessdiscount");
  const lessdiscountBtn = document.querySelectorAll(".lessdiscount-btn");

  lessdiscount.forEach(function(lessdiscount) {
    lessdiscount.addEventListener("change", function() {
      lessdiscountTags.forEach(function(lessdiscountTag) {
        lessdiscountTag.classList.toggle("lessdiscount-active")
      })
    })
  })

  lessdiscountBtn.forEach(function(lessdiscountBtns) {
    lessdiscountBtns.addEventListener("click", function() {
      lessdiscountTags.forEach(function(lessdiscountDeleteClass) {
        lessdiscountDeleteClass.classList.remove("lessdiscount-active")
      })
      lessdiscount.forEach(function(lessdiscountInput) {
        if ( lessdiscountInput.checked ) {
          lessdiscountInput.checked = false
        }
      })
    })
  })

  const nodiscount = document.querySelectorAll(".catalog__nodiscount");
  const nodiscountTags = document.querySelectorAll(".nodiscount");
  const nodiscountBtn = document.querySelectorAll(".nodiscount-btn");

  nodiscount.forEach(function(nodiscount) {
    nodiscount.addEventListener("change", function() {
      nodiscountTags.forEach(function(nodiscountTag) {
        nodiscountTag.classList.toggle("nodiscount-active")
      })
    })
  })

  nodiscountBtn.forEach(function(nodiscountBtns) {
    nodiscountBtns.addEventListener("click", function() {
      nodiscountTags.forEach(function(nodiscountDeleteClass) {
        nodiscountDeleteClass.classList.remove("nodiscount-active")
      })
      nodiscount.forEach(function(nodiscountInput) {
        if ( nodiscountInput.checked ) {
          nodiscountInput.checked = false
        }
      })
    })
  })


  const colorBrown = document.querySelectorAll(".color__brown");
  const brownTags = document.querySelectorAll(".color-brown");
  const brownBtn = document.querySelectorAll(".brown-btn");

  colorBrown.forEach(function(brown) {
    brown.addEventListener("change", function() {
      brownTags.forEach(function(brownTag) {
        brownTag.classList.toggle("brown-active")
      })
    })
  })

  brownBtn.forEach(function(brownBtns) {
    brownBtns.addEventListener("click", function() {
      brownTags.forEach(function(brownDeleteClass) {
        brownDeleteClass.classList.remove("brown-active")
      })
      colorBrown.forEach(function(brownInput) {
        if ( brownInput.checked ) {
          brownInput.checked = false
        }
      })
    })
  })

  const colorBlack = document.querySelectorAll(".color__black");
  const blackTags = document.querySelectorAll(".color-black");
  const blackBtn = document.querySelectorAll(".black-btn");

  colorBlack.forEach(function(black) {
    black.addEventListener("change", function() {
      blackTags.forEach(function(blackTag) {
        blackTag.classList.toggle("black-active")
      })
    })
  })

  blackBtn.forEach(function(blackBtns) {
    blackBtns.addEventListener("click", function() {
      blackTags.forEach(function(blackDeleteClass) {
        blackDeleteClass.classList.remove("black-active")
      })
      colorBlack.forEach(function(blackInput) {
        if ( blackInput.checked ) {
          blackInput.checked = false
        }
      })
    })
  })

  const colorBeige = document.querySelectorAll(".color__beige");
  const beigeTags = document.querySelectorAll(".color-beige");
  const beigeBtn = document.querySelectorAll(".beige-btn");

  colorBeige.forEach(function(beige) {
    beige.addEventListener("change", function() {
      beigeTags.forEach(function(beigeTag) {
        beigeTag.classList.toggle("beige-active")
      })
    })
  })

  beigeBtn.forEach(function(beigeBtns) {
    beigeBtns.addEventListener("click", function() {
      beigeTags.forEach(function(beigeDeleteClass) {
        beigeDeleteClass.classList.remove("beige-active")
      })
      colorBeige.forEach(function(beigeInput) {
        if ( beigeInput.checked ) {
          beigeInput.checked = false
        }
      })
    })
  })

  const colorGray = document.querySelectorAll(".color__gray");
  const grayTags = document.querySelectorAll(".color-gray");
  const grayBtn = document.querySelectorAll(".gray-btn");

  colorGray.forEach(function(gray) {
    gray.addEventListener("change", function() {
      grayTags.forEach(function(grayTag) {
        grayTag.classList.toggle("gray-active")
      })
    })
  })

  grayBtn.forEach(function(grayBtns) {
    grayBtns.addEventListener("click", function() {
      grayTags.forEach(function(grayDeleteClass) {
        grayDeleteClass.classList.remove("gray-active")
      })
      colorGray.forEach(function(grayInput) {
        if ( grayInput.checked ) {
          grayInput.checked = false
        }
      })
    })
  })


  const colorWhite = document.querySelectorAll(".color__white");
  const whiteTags = document.querySelectorAll(".color-white");
  const whiteBtn = document.querySelectorAll(".white-btn");

  colorWhite.forEach(function(white) {
    white.addEventListener("change", function() {
      whiteTags.forEach(function(whiteTag) {
        whiteTag.classList.toggle("white-active")
      })
    })
  })

  whiteBtn.forEach(function(whiteBtns) {
    whiteBtns.addEventListener("click", function() {
      whiteTags.forEach(function(whiteDeleteClass) {
        whiteDeleteClass.classList.remove("white-active")
      })
      colorWhite.forEach(function(whiteInput) {
        if ( whiteInput.checked ) {
          whiteInput.checked = false
        }
      })
    })
  })

  const colorNavy = document.querySelectorAll(".color__navy");
  const navyTags = document.querySelectorAll(".color-navy");
  const navyBtn = document.querySelectorAll(".navy-btn");

  colorNavy.forEach(function(navy) {
    navy.addEventListener("change", function() {
      navyTags.forEach(function(navyTag) {
        navyTag.classList.toggle("navy-active")
      })
    })
  })

  navyBtn.forEach(function(navyBtns) {
    navyBtns.addEventListener("click", function() {
      navyTags.forEach(function(navyDeleteClass) {
        navyDeleteClass.classList.remove("navy-active")
      })
      colorNavy.forEach(function(navyInput) {
        if ( navyInput.checked ) {
          navyInput.checked = false
        }
      })
    })
  })


  const colorOrange = document.querySelectorAll(".color__orange");
  const orangeTags = document.querySelectorAll(".color-orange");
  const orangeBtn = document.querySelectorAll(".orange-btn");

  colorOrange.forEach(function(orange) {
    orange.addEventListener("change", function() {
      orangeTags.forEach(function(orangeTag) {
        orangeTag.classList.toggle("orange-active")
      })
    })
  })

  orangeBtn.forEach(function(orangeBtns) {
    orangeBtns.addEventListener("click", function() {
      orangeTags.forEach(function(orangeDeleteClass) {
        orangeDeleteClass.classList.remove("orange-active")
      })
      colorOrange.forEach(function(orangeInput) {
        if ( orangeInput.checked ) {
          orangeInput.checked = false
        }
      })
    })
  })

  const colorYellow = document.querySelectorAll(".color__yellow");
  const yellowTags = document.querySelectorAll(".color-yellow");
  const yellowBtn = document.querySelectorAll(".yellow-btn");

  colorYellow.forEach(function(yellow) {
    yellow.addEventListener("change", function() {
      yellowTags.forEach(function(yellowTag) {
        yellowTag.classList.toggle("yellow-active")
      })
    })
  })

  yellowBtn.forEach(function(yellowBtns) {
    yellowBtns.addEventListener("click", function() {
      yellowTags.forEach(function(yellowDeleteClass) {
        yellowDeleteClass.classList.remove("yellow-active")
      })
      colorYellow.forEach(function(yellowInput) {
        if ( yellowInput.checked ) {
          yellowInput.checked = false
        }
      })
    })
  })

  const colorGreen = document.querySelectorAll(".color__green");
  const greenTags = document.querySelectorAll(".color-green");
  const greenBtn = document.querySelectorAll(".green-btn");

  colorGreen.forEach(function(green) {
    green.addEventListener("change", function() {
      greenTags.forEach(function(greenTag) {
        greenTag.classList.toggle("green-active")
      })
    })
  })

  greenBtn.forEach(function(greenBtns) {
    greenBtns.addEventListener("click", function() {
      greenTags.forEach(function(greenDeleteClass) {
        greenDeleteClass.classList.remove("green-active")
      })
      colorGreen.forEach(function(greenInput) {
        if ( greenInput.checked ) {
          greenInput.checked = false
        }
      })
    })
  })

  const colorRed = document.querySelectorAll(".color__red");
  const redTags = document.querySelectorAll(".color-red");
  const redBtn = document.querySelectorAll(".red-btn");

  colorRed.forEach(function(red) {
    red.addEventListener("change", function() {
      redTags.forEach(function(redTag) {
        redTag.classList.toggle("red-active")
      })
    })
  })

  redBtn.forEach(function(redBtns) {
    redBtns.addEventListener("click", function() {
      redTags.forEach(function(redDeleteClass) {
        redDeleteClass.classList.remove("red-active")
      })
      colorRed.forEach(function(redInput) {
        if ( redInput.checked ) {
          redInput.checked = false
        }
      })
    })
  })

  const colorPurple = document.querySelectorAll(".color__purple");
  const purpleTags = document.querySelectorAll(".color-purple");
  const purpleBtn = document.querySelectorAll(".purple-btn");

  colorPurple.forEach(function(purple) {
    purple.addEventListener("change", function() {
      purpleTags.forEach(function(purpleTag) {
        purpleTag.classList.toggle("purple-active")
      })
    })
  })

  purpleBtn.forEach(function(purpleBtns) {
    purpleBtns.addEventListener("click", function() {
      purpleTags.forEach(function(purpleDeleteClass) {
        purpleDeleteClass.classList.remove("purple-active")
      })
      colorPurple.forEach(function(purpleInput) {
        if ( purpleInput.checked ) {
          purpleInput.checked = false
        }
      })
    })
  })

  const colorPink = document.querySelectorAll(".color__pink");
  const pinkTags = document.querySelectorAll(".color-pink");
  const pinkBtn = document.querySelectorAll(".pink-btn");

  colorPink.forEach(function(pink) {
    pink.addEventListener("change", function() {
      pinkTags.forEach(function(pinkTag) {
        pinkTag.classList.toggle("pink-active")
      })
    })
  })

  pinkBtn.forEach(function(pinkBtns) {
    pinkBtns.addEventListener("click", function() {
      pinkTags.forEach(function(pinkDeleteClass) {
        pinkDeleteClass.classList.remove("pink-active")
      })
      colorPink.forEach(function(pinkInput) {
        if ( pinkInput.checked ) {
          pinkInput.checked = false
        }
      })
    })
  })

  const colorBlue = document.querySelectorAll(".color__blue");
  const blueTags = document.querySelectorAll(".color-blue");
  const blueBtn = document.querySelectorAll(".blue-btn");

  colorBlue.forEach(function(blue) {
    blue.addEventListener("change", function() {
      blueTags.forEach(function(blueTag) {
        blueTag.classList.toggle("blue-active")
      })
    })
  })

  blueBtn.forEach(function(blueBtns) {
    blueBtns.addEventListener("click", function() {
      blueTags.forEach(function(blueDeleteClass) {
        blueDeleteClass.classList.remove("blue-active")
      })
      colorBlue.forEach(function(blueInput) {
        if ( blueInput.checked ) {
          blueInput.checked = false
        }
      })
    })
  })

  const colorLightgreen = document.querySelectorAll(".color__lightgreen");
  const lightgreenTags = document.querySelectorAll(".color-lightgreen");
  const lightgreenBtn = document.querySelectorAll(".lightgreen-btn");

  colorLightgreen.forEach(function(lightgreen) {
    lightgreen.addEventListener("change", function() {
      lightgreenTags.forEach(function(lightgreenTag) {
        lightgreenTag.classList.toggle("lightgreen-active")
      })
    })
  })

  lightgreenBtn.forEach(function(lightgreenBtns) {
    lightgreenBtns.addEventListener("click", function() {
      lightgreenTags.forEach(function(lightgreenDeleteClass) {
        lightgreenDeleteClass.classList.remove("lightgreen-active")
      })
      colorLightgreen.forEach(function(lightgreenInput) {
        if ( lightgreenInput.checked ) {
          lightgreenInput.checked = false
        }
      })
    })
  })

  const colorAquamarine = document.querySelectorAll(".color__aquamarine");
  const aquamarineTags = document.querySelectorAll(".color-aquamarine");
  const aquamarineBtn = document.querySelectorAll(".aquamarine-btn");

  colorAquamarine.forEach(function(aquamarine) {
    aquamarine.addEventListener("change", function() {
      aquamarineTags.forEach(function(aquamarineTag) {
        aquamarineTag.classList.toggle("aquamarine-active")
      })
    })
  })

  aquamarineBtn.forEach(function(aquamarineBtns) {
    aquamarineBtns.addEventListener("click", function() {
      aquamarineTags.forEach(function(aquamarineDeleteClass) {
        aquamarineDeleteClass.classList.remove("aquamarine-active")
      })
      colorAquamarine.forEach(function(aquamarineInput) {
        if ( aquamarineInput.checked ) {
          aquamarineInput.checked = false
        }
      })
    })
  })

  const colorGrayc = document.querySelectorAll(".color__grayc");
  const graycTags = document.querySelectorAll(".color-grayc");
  const graycBtn = document.querySelectorAll(".grayc-btn");

  colorGrayc.forEach(function(grayc) {
    grayc.addEventListener("change", function() {
      graycTags.forEach(function(graycTag) {
        graycTag.classList.toggle("grayc-active")
      })
    })
  })

  graycBtn.forEach(function(graycBtns) {
    graycBtns.addEventListener("click", function() {
      graycTags.forEach(function(graycDeleteClass) {
        graycDeleteClass.classList.remove("grayc-active")
      })
      colorGrayc.forEach(function(grayceInput) {
        if ( grayceInput.checked ) {
          grayceInput.checked = false
        }
      })
    })
  })

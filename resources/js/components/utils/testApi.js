const configTestApi = {
    addClassVariable: {
        master: "variableinfo",
        description: `Asset classes can have associated variables.
            This method adds them to the database.If you wish to replace a
            series of variables for a given asset class, you will first need to use
            the deleteAllVariablesForClass() method before adding the new ones.
        `,
        requires: [
            "site_name",
            "asset_class",
            "level",
            "variable_description",
            "variable_name",
            "variable_sqltype",
            "variable_value"
        ]
    },

    addEditAssetClass: {
        master: "classinfo",
        description: `
            The purpose of the addEditAssetClass() method is to
            create a new asset class or edit an existing one.
        `,
        requires: [
            "site_name",
            "asset_class",
            "asset_description",
            "asset_text",
            "level"
        ]
    },

    deleteAllVariablesForClass: {
        master: "classname",
        description: `
            This method removes from the database all
            of the variables associated to a given class.
        `,
        requires: ["site_name", "asset_class", "level"]
    },

    deleteAssetClass: {
        master: "assetid",
        requires: ["id"],
        description: `This method deletes a class using its database index`
    },

    deleteClassVariable: {
        master: "variableid",
        requires: ["id"],
        description: `Deletes a variable from a class using its database index.`
    },

    getAllFromClass: {
        master: "classinfo",
        requires: ["site_name", "asset_class", "level"],
        description: `The purpose of this method is to list all the properties of a given class`
    },

    getClassesByLevel: {
        master: "classinfo",
        requires: ["site_name", "level"],
        description: `Lists the product classes for a certain level (primary, secondaru, etc).`
    },

    getVariablesFromAssetClass: {
        master: "classinfo",
        requires: ["site_name", "asset_class", "level"],
        description: `Lists the variables for a given asset class.`
    },

    getVariablesFromClassID: {
        master: "classid",
        requires: ["assetclass_id"],
        description: `The purpose of this method is to get all the variables for a given class.`
    },

    listAllPrimaryClassesFromSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `This method collects all the classes with a level value of 0 (primary class)`
    },

    listAllSecondaryClassesFromSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `Rhis method collects all the classes with a level value of 1 (secondary class).`
    },

    refreshFeasibleBaysForBox: {
        master: "boxid",
        requires: ["fullbox_id"],
        description: `This method will update the aptbay_list table, which is the one that filters a given SKU when calculating multi-compartment trucks.`
    },

    updatePropertiesForBoxID: {
        master: "fullbox_id",
        requires: ["fullbox_id"],
        description: `Updates the list of loading and other properties for a given SKU.`
    },

    zapPropertyList: {
        master: "sitename",
        requires: ["site_name"],
        description: `Deletes all the case properties of a given site.`
    },

    addEditBoard: {
        master: "boardinfo",
        requires: [
            "site_name",
            "board_type",
            "board_thickness",
            "board_unit",
            "board_weight"
        ],
        description: `
            The purpose of the addEditBoard() method is to check whether a specific board type exists.
            If it doesn't, then the method will create a new one in the database.
            If it does, then it will update the existing board with the new data.
            In both circumstances, the method returns the board id, which, if greater than zero, means that the board exists or has been created.
        `
    },

    deleteBoards: {
        master: "boardids",
        requires: ["boardids"],
        description: `
            The deleteBoards() method will erase a list of corrugated boards
            using their id or their code and site names. An array is accepted and a
            list of ids is returned with information on whether they were deleted or not.
        `
    },

    getDefaultBoardFromSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            This method returns the identification (unique database index)
            and the name of the corrugated board that is used by default.
        `
    },

    getBoardInfo: {
        master: "boardid",
        requires: ["id", "board_type", "site_name"],
        description: `
            The getBoardInfo() method returns the available information for a specific corrugated board.
            It receives the board index (that has to be known previously) or the board type name and
            site name (easier to remember).
        `
    },

    getRSCDrawing: {
        master: "boxdata",
        requires: [
            "width",
            "height",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_color",
            "box_thick"
        ],
        description: `The getRSCDrawing() method will return the SVG code that displays the flat carton drawings.`
    },

    listBoardsPerSite: {
        master: "siteinfo",
        requires: ["site_name"],
        description: `This method lists the id and board type of all the boards in a given site.`
    },

    addBoxForCalc: {
        master: "boxinfo",
        requires: [
            "shipment_id",
            "box_amount",
            "box_code",
            "box_desc",
            "box_color",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_weight",
            "box_allowlength",
            "box_allowwidth",
            "box_allowheight",
            "box_unit"
        ],
        description: `
            The addBoxForCalc() method creates an entry in the database with basic
            box information and shipment index so it can be retrieved for calculating
            pallet loads that do not require persistence (i.e. to be stored for further use).
            Once all the boxes are stored, the palletFillFromShipmentDims() method collects these records,
            calculates the pallet fill and then deletes them. This multi-step process reduces
            the size of the input JSON for the pallet method.
        `
    },

    addEditEmptyBox: {
        master: "boxdata",
        requires: [
            "site_name",
            "box_classname",
            "box_code",
            "box_allowlength",
            "box_allowwidth",
            "box_allowheight",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_volume",
            "box_weight",
            "box_ba",
            "box_bl",
            "box_bw",
            "box_bht",
            "box_bwt",
            "box_btype",
            "box_color",
            "box_comp",
            "box_desc",
            "box_enabled",
            "box_sf",
            "box_tapecolor",
            "box_tapew",
            "box_trayht",
            "box_type",
            "box_unit",
            "box_usage",
            "box_visible",
            "box_compl",
            "box_compw",
            "box_compht",
            "box_maxsl",
            "box_maxsw",
            "box_maxsht"
        ],
        description: `
            The purpose of this method is to check whether a standard case exists.
            Standard cases are empty off-the-shelf boxes with known dimensions
            that are used for filling with primary packages.
            If the standard box doesn't exist, then the method will
            create a new one in the database. If it does exist, then it will
            update the existing properties with the new data. In both circumstances,
            the method returns the standard box id, which should be greater than zero.
        `
    },

    deleteEmptyBox: {
        master: "boxid",
        requires: ["id"],
        description: `This method erases a standard (empty) box and its linked full boxes from the database.`
    },

    deleteEmptyBoxes: {
        master: "boxids",
        requires: ["boxids"],
        description: `
            This method will erase a list of standard boxes using their ids. An array is accepted
            and a list of ids is returned with information on whether they were deleted or not.
            For this function to work, there must not be full boxes associated with the empty
            boxes to be deleted.
        `
    },

    deleteFullBox: {
        master: "boxid",
        requires: ["id"],
        description: `This function erases a full box from the database. It does not erase the associated empty box.`
    },

    dumpNuPastedBoxes: {
        master: "items",
        requires: [
            "site",
            "box_code",
            "box_desc",
            "box_class1",
            "box_class2",
            "box_color",
            "box_comp",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_weight",
            "box_unit"
        ],
        description: `This method takes box data from comma-delimited lines and creates records for full boxes.`
    },

    dumpShortBox: {
        master: "boxdata",
        requires: [
            "site_name",
            "box_class",
            "box_code",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_weight",
            "box_comp",
            "box_color",
            "box_desc",
            "box_class1",
            "box_class2",
            "box_unit"
        ],
        description: `Inserts or updates a full box in the database using the minimum number of properties.`
    },

    getEmptyBoxInfo: {
        master: "boxdata",
        requires: ["id", "box_code", "site_name"],
        description: `
            The getEmptyBoxInfo() method returns the available information
            for a specific standard case. It receives the box index (that has to be known previously)
            or the box code and site name (easier to remember).
        `
    },

    getShortBoxInputData: {
        master: "boxdata",
        requires: ["box_code", "site_name"],
        description: `
            By supplying a box code (i.e. a name) and the name of the site,
            this method will return a list of box properties.
        `
    },

    listBoxesPerClass: {
        master: "classname",
        requires: ["site_name", "class_name"],
        description: `This method lists the basic properties of the standard cases for a given class.`
    },

    listClassNamesForBoxesInSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            The purpose of this method is to list the names of the classes
            that are linked to standard (off-the-shelf) boxes in the database.
        `
    },

    listBoxesPerSiteClassUnit: {
        master: "boxids",
        requires: ["site_name", "class_name", "box_unit"],
        description: `
            This method lists the id, name and description of
            all the standard cases provided the site, class and unit.
        `
    },

    listEmptyBoxesPerSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            Given a site name, this function will list
            all the standard (empty) boxes available.
        `
    },

    listSKUsFromSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `This method delivers the full list of box SKUs in a given site.`
    },

    updateBoxConstraints: {
        master: "classname",
        requires: [
            "site_name",
            "box_code",
            "box_compl",
            "box_compw",
            "box_compht",
            "box_maxsl",
            "box_maxsw",
            "box_maxsht"
        ],
        description: `
            This method updates the compression and slack box properties
            that determine the way the packages are to be filled.
        `
    },

    deleteConsignmentWithID: {
        master: "cargoid",
        requires: ["id"],
        description: `Provided the database index, this method will delete the consignment from the database.`
    },

    deleteShipItemWithID: {
        master: "itemid",
        requires: ["id"],
        description: `This method erases a product item from a consignment provided the item database index.`
    },

    deleteShipmentWithID: {
        master: "itemid",
        requires: ["id"],
        description: `This methods deletes a calculation from the database.`
    },

    dumpConsignmentPart: {
        master: "consignment",
        requires: [
            "site_name",
            "user_name",
            "cargo_date",
            "cargo_name",
            "origin",
            "destination",
            "vessel",
            "comment",
            "cargo_items"
        ],
        description: `
            The dumpConsignmentPart() method adds a new consignment to the database
            if none is available that shares the same site, name, date and comment.
            If there is already such a consignment in the database, this function
            will check the consignment content and add boxes to the shipment if
            they are not available.
        `
    },

    dumpEmptyConsignment: {
        master: "consignment",
        requires: [
            "site_name",
            "user_name",
            "cargo_date",
            "cargo_name",
            "origin",
            "destination",
            "vessel",
            "comment"
        ],
        description: `
            This method adds a consignment (cargo item) to the database with basic data.
            It is empty because it requires the shipment items,
            which are added in a separate method called dumpShipItem().
        `
    },

    dumpShipItem: {
        master: "shipitem",
        requires: [
            "site_name",
            "cargo_date",
            "cargo_name",
            "comment",
            "po",
            "client_name",
            "client_id",
            "sku_name",
            "box_amount",
            "sequence"
        ],
        description: `This method adds a shipment item (a box) to the database so it can be linked to a consignment.`
    },

    getConsignmentWithID: {
        master: "cargoid",
        requires: ["id"],
        description: `Retrieves the relevant information from a given consignment.`
    },

    getRecentConsignments: {
        master: "sitename",
        requires: ["site_name", "count"],
        description: `
            Lists the id, name and date of the last n consignments that have been stored
            in the database. Orders the consignments by the way they were entered,
            not the date. n is an input variable.
        `
    },

    addEditPackage: {
        master: "pinfo",
        requires: [
            "site_name",
            "pp_code",
            "pp_allowlength",
            "pp_allowdiam",
            "pp_allowwidth",
            "pp_allowheight",
            "pp_body",
            "pp_cap",
            "pp_capdiam",
            "pp_length",
            "pp_diameter",
            "pp_width",
            "pp_height",
            "pp_weight",
            "pp_c1",
            "pp_c2",
            "pp_c3",
            "pp_c4",
            "pp_description",
            "pp_type",
            "pp_unit",
            "updated"
        ],
        description: `
            The purpose of the addEditPackage() method is to check whether a primary package exists.
            If it doesn't, then the method will create a new package in the database. If it does,
            then it will update the existing package with the new data. In both circumstances,
            the method returns the package id, which, if greater than zero, means that the PP exists.
        `
    },

    deletePackage: {
        master: "packid",
        requires: ["id"],
        description: `
            The purpose of the addEditPackage() method is to check whether a
            primary package exists. If it doesn't, then the method will create
            a new package in the database. If it does, then it will update the
            existing package with the new data. In both circumstances, the method
            returns the package id, which, if greater than zero, means that the
            PP exists.
        `
    },

    deletePackages: {
        master: "ppdata",
        requires: ["packids"],
        description: `
            The deletePackages() method will erase a list of primary packages using
            their id or their code and site names. An array is accepted and a list
            of ids is returned with information on whether they were deleted or not.
        `
    },

    getPackageInfo: {
        master: "ppdata",
        requires: ["id", "pp_code", "site_name"],
        description: `
            The getPackageInfo() method returns the available information for a
            specific primary package.It receives the primary package index
            (that has to be known previously) or the pack code and site name
            (easier to remember).
        `
    },

    listPacksPerSite: {
        master: "sede",
        requires: ["site_name"],
        description: `
            This method lists the id, name and description of
            all the primary packages in a given site.
        `
    },

    createNewShipment: {
        master: "userinfo",
        requires: ["user_name"],
        description: `
            This function adds a new entry to the shipment list. This is important because all
            QPM calculations are registered in this list, which references the items
            (boxes, pallets, containers, trucks) that are required for any given operation.
        `
    },

    deleteCalcsWithShipmentID: {
        master: "userinfo",
        requires: ["id"],
        description: `
            When a calculation is performed, a shipment record is created so that all
            other records can link to it. This method performs a maintenance procedure
            in which all the calculation (transient) records for a given shipment are
            erased from the database.
        `
    },

    queryTruckFillShipments: {
        master: "dateinfo",
        requires: ["date1", "date2"],
        description: `
            The purpose of this method is get a list of all the shipment IDs that are
            linked to truck fill calculations in a specific period of time
        `
    },

    checkBayAvailability: {
        master: "truckinfo",
        requires: ["truckid", "shipment"],
        description: `This checkBayAvailability() function checks whether the items in a shipment are allowed in the bays of a specific truck.`
    },

    calcTruckBay: {
        master: "shipitemdata",
        requires: [
            "route_name",
            "route_date",
            "comment",
            "po",
            "prod_id",
            "client_id",
            "client_name",
            "prod_seq",
            "prod_q",
            "trip",
            "site_name"
        ],
        description: `
            This checkBayAvailability() function checks whether the items in a
            shipment are allowed in the bays of a specific truck.
        `
    },

    listAllModels: {
        master: "sitename",
        requires: ["site_name"],
        description: `The purpose of this method is to list all of the trucks in all sites.`
    },

    dumpEmptyRoute: {
        master: "routedata",
        requires: [
            "warehouse",
            "driver_id",
            "driver_name",
            "route_date",
            "route_name",
            "truck_name",
            "comment",
            "site_name"
        ],
        description: `
            This method adds a truck route to the database with basic data.
            It is empty because it requires the shipment items, which are
            added in a separate method called addShipItemToRoute().
        `
    },

    addShipItemToRoute: {
        master: "shipitemdata",
        requires: [
            "route_name",
            "route_date",
            "comment",
            "po",
            "prod_id",
            "client_id",
            "client_name",
            "prod_seq",
            "prod_q",
            "trip",
            "site_name"
        ],
        description: `This method adds a shipment item (a box) to the database so it can be linked to a consignment.`
    },

    createBatchWithRoutes: {
        master: "routedata",
        requires: ["user_name", "site_name", "routes"],
        description: `
            This method adds a new batch (group) of routes to the
            database that contains the routes listed in the input data.
        `
    },

    dumpFullRoutes: {
        master: "routedata",
        requires: [
            "site_name",
            "user_name",
            "column_names",
            "column_separator",
            "overwrite_trips",
            "column_data"
        ],
        description: `
            The purpose of the dumpFullRoutes() method is to load the truck
            route data in only one step. The JSON object is mostly a wrapper
            for comma-delimited column data. This creates a reduced size text
            block that is better handled using SOAP, since URL lengths with
            multiple routes will break. Additional data (besides the columns)
            includes the name of the site, the user, the names of the columns
            in the text and whether the trip numbers will be preserved from
            the data or if they will be set, based on the order of each
            transport in the route.
        `
    },

    searchRoutesWithString: {
        master: "searchinfo",
        requires: ["site_name", "search_term", "snippet"],
        description: `
            The purpose of the searchRoutesWithString() method is to find a list of
            VSO truck routes and their status, using a string of characters that can
            contain lists or individual terms. These search terms can be comment
            (transport), route name, truck name, driver id or driver name.
        `
    },

    getTransportStatus: {
        master: "transports",
        requires: ["transports"],
        description: `
            The purpose of the getTransportStatus() method is to check whether
            one or more transports have been processed (i.e. calculated).
        `
    },

    addEditPalletConstraints: {
        master: "palletinfo",
        requires: [
            "slab_code",
            "pallet_code",
            "site_name",
            "pl_comment",
            "pl_dividers",
            "pl_loadtype",
            "pl_slipthick",
            "pl_waytype",
            "pl_maxll",
            "pl_maxlw",
            "pl_maxlht",
            "pl_maxlwt",
            "pl_maxskus",
            "pl_minll",
            "pl_minlw",
            "pl_minlht",
            "pl_patterns",
            "pl_enabled"
        ],
        description: `
            The addEditPalletConstraints() method assigns a set of
            fill constraints to a slab for calculating pallet loads.
        `
    },

    addEditSlab: {
        master: "slabinfo",
        requires: [
            "site_name",
            "slab_code",
            "slab_length",
            "slab_width",
            "slab_height",
            "slab_weight",
            "slab_color",
            "slab_descr",
            "slab_dwg",
            "slab_name",
            "slab_unit",
            "slab_enabled"
        ],
        description: `
            The purpose of the addEditSlab() method is to check first if a certain pallet exists.
            If it doesn't exist, the pallet is created. If it does exist, its properties are updated.
        `
    },

    deleteEmptyPallet: {
        master: "palletid",
        requires: ["id"],
        description: `
            The deleteEmptyPallet() function removes an empty (physical) pallet
            from the database. If it is being used for a pallet fill. Otherwise,
            this method will return an error.
        `
    },

    deleteFullPallet: {
        master: "palletidinfo",
        requires: ["id"],
        description: `
            The deleteFullPallet() function removes a pallet with boxes from the database.
            It does not remove the physical pallet nor the boxes that were used to make the pallet load.
        `
    },

    deleteSlab: {
        master: "slabid",
        requires: ["id"],
        description: `
            The deleteSlab() method removes an empty
            pallet (without attached constraints)
            from the database.
        `
    },

    getConstraintsPerSlab: {
        master: "slabid",
        requires: ["slab_id"],
        description: `
            The getConstraintsPerSlab() method returns the available information for a
            pallet constraint that is associated with a specific empty pallet.
        `
    },

    getContentsFromPalletFill: {
        master: "palletid",
        requires: ["id"],
        description: `
            This method requests the information for
            the boxes that are loaded into a specific pallet.
        `
    },

    getFullPalletContents: {
        master: "palletid",
        requires: ["id"],
        description: `
            This method is similar to the getContentsFromPalletFill()
            method in that it retrieves the box information for a given pallet fill,
            but instead of requiring the index of a pallet fill, it uses the index of the full pallet object
            (a different table in the database).
        `
    },

    getPalletInfo: {
        master: "palletid",
        requires: ["pallet_code", "site_name"],
        description: `
            The getPalletInfo() method returns
            the available information for a pallet constraint.
        `
    },

    getSlabInfo: {
        master: "slabid",
        requires: ["slab_code", "site_name"],
        description: `
            The getSlabInfo() method returns
            the available information for a specific pallet.
        `
    },

    listFullPalletsPerSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            This method lists the id, code and description
            of all the full pallets in a given site.
        `
    },

    listPalletNamesPerSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            The purpose of this method is to provide a list
            of the pallet constraints in a given site.
        `
    },

    listPalletsPerSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            This method lists the id, name and description
            of all the pallet constraints in a given site.
        `
    },

    listSlabsPerSite: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            This method lists the id, name and
            description of all the pallets in a given site.
        `
    },

    queryOrphanPalletIDs: {
        master: "sitename",
        requires: ["site_name"],
        description: `
            This is a maintenance method that finds the indexes (unique database identifiers)
            of the full pallets that have been created from temporary calculations.
            These pallets are identified to be deleted later.
        `
    },

    fillPalletFromBox: {
        master: "filldata",
        requires: ["user_name", "pallet_code", "box_code", "ti", "hi", "total"],
        description: `
            The purpose of the fillPalletFromBox() method is to calculate a set of pallets from a
            box already available in the database and store them there. The information that is
            returned by the method is a part of the data that is available, leaving opportunities
            for custom reports.
        `
    },

    getPalletArrangement: {
        master: "basicdata",
        requires: [
            "user_name",
            "box_unit",
            "calc_type",
            "box_extlength",
            "box_extwidth",
            "pallet_length",
            "pallet_width",
            "box_amount"
        ],
        description: `
            The getPalletArrangement() method returns a pallet layer arrangement or configuration given
            the length and width of the box, the length and width of the pallet and the desired algorithm.
            These algorithms can be either lengthwise, transversal, mixed or Australian (for Aussie Pack
            n Ship only). The result contains the coordinates (x,y) and orientation (0=lengthwise,1=transversal).
        `
    },

    palletFillFromDims: {
        master: "calcinfo",
        requires: [
            "user_name",
            "calc_type",
            "pallet_dwg",
            "tihi",
            "box_code",
            "box_color",
            "box_extlength",
            "box_extwidth",
            "box_extheight",
            "box_weight",
            "box_unit",
            "box_allowlength",
            "box_allowwidth",
            "box_allowheight",
            "pallet_code",
            "pallet_color",
            "pallet_length",
            "pallet_width",
            "pallet_height",
            "pallet_weight",
            "pallet_unit",
            "pl_maxll",
            "pl_maxlw",
            "pl_maxlht",
            "pl_maxlwt"
        ],
        description: `
            The palletFillFromDims() method takes the dimensions of a box and a pallet
            that don't have to be in the database and returns the best fit possible for this pair.
        `
    },

    palletFillsFromShipmentDims: {
        master: "",
        requires: [
            "user_name",
            "calcmode",
            "pallet_code",
            "pallet_length",
            "pallet_width",
            "pallet_height",
            "pallet_weight",
            "pallet_unit",
            "pl_maxll",
            "pl_maxlw",
            "pl_maxlht",
            "pl_maxlwt",
            "shipment_id"
        ],
        description: `
            The palletFillsFromShipmentDims() method calculates the pallets that are needed for
            filling with a list of boxes that have been stored in a temporary database table, as
            opposed to boxes stored permanently. Only one pallet type can be used for loading.
            This is a three-step method:

            Create a new shipment using the createNewShipment() method.
            With the unique shipment identifier that was returned and
            the rest of the box information, use the addBoxForCalc()
            function to add the temporary boxes to the database.
            Once the boxes have been added, use this method to calculate
            a pallet load and delete them from the database.
        `
    }
};

module.exports = { configTestApi };

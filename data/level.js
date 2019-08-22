const DATA = [
    {"level": 0, "exp": 0},
    {"level": 1, "exp": 1},
    {"level": 2, "exp": 4},
    {"level": 3, "exp": 12},
    {"level": 4, "exp": 24},
    {"level": 5, "exp": 50},
    {"level": 6, "exp": 84},
    {"level": 7, "exp": 140},
    {"level": 8, "exp": 224},
    {"level": 9, "exp": 342},
    {"level": 10, "exp": 500},
    {"level": 11, "exp": 712},
    {"level": 12, "exp": 989},
    {"level": 13, "exp": 1340},
    {"level": 14, "exp": 1775},
    {"level": 15, "exp": 2313},
    {"level": 16, "exp": 2965},
    {"level": 17, "exp": 3747},
    {"level": 18, "exp": 4671},
    {"level": 19, "exp": 5763},
    {"level": 20, "exp": 7036},
    {"level": 21, "exp": 8505},
    {"level": 22, "exp": 10190},
    {"level": 23, "exp": 12123},
    {"level": 24, "exp": 14321},
    {"level": 25, "exp": 16800},
    {"level": 26, "exp": 19578},
    {"level": 27, "exp": 22699},
    {"level": 28, "exp": 26183},
    {"level": 29, "exp": 30050},
    {"level": 30, "exp": 34320},
    {"level": 31, "exp": 39035},
    {"level": 32, "exp": 44227},
    {"level": 33, "exp": 49919},
    {"level": 34, "exp": 56134},
    {"level": 35, "exp": 62920},
    {"level": 36, "exp": 70301},
    {"level": 37, "exp": 78314},
    {"level": 38, "exp": 86986},
    {"level": 39, "exp": 96369},
    {"level": 40, "exp": 106492},
    {"level": 41, "exp": 117383},
    {"level": 42, "exp": 129083},
    {"level": 43, "exp": 141651},
    {"level": 44, "exp": 155118},
    {"level": 45, "exp": 169515},
    {"level": 46, "exp": 184874},
    {"level": 47, "exp": 201273},
    {"level": 48, "exp": 218746},
    {"level": 49, "exp": 237327},
    {"level": 50, "exp": 257050},
    {"level": 51, "exp": 277986},
    {"level": 52, "exp": 300186},
    {"level": 53, "exp": 323687},
    {"level": 54, "exp": 348527},
    {"level": 55, "exp": 374781},
    {"level": 56, "exp": 402489},
    {"level": 57, "exp": 431707},
    {"level": 58, "exp": 462475},
    {"level": 59, "exp": 494874},
    {"level": 60, "exp": 528948},
    {"level": 61, "exp": 564738},
    {"level": 62, "exp": 602305},
    {"level": 63, "exp": 641737},
    {"level": 64, "exp": 683078},
    {"level": 65, "exp": 726375},
    {"level": 66, "exp": 771672},
    {"level": 67, "exp": 819082},
    {"level": 68, "exp": 868652},
    {"level": 69, "exp": 920432},
    {"level": 70, "exp": 974470},
    {"level": 71, "exp": 1030863},
    {"level": 72, "exp": 1089684},
    {"level": 73, "exp": 1150984},
    {"level": 74, "exp": 1214814},
    {"level": 75, "exp": 1281278},
    {"level": 76, "exp": 1350429},
    {"level": 77, "exp": 1422344},
    {"level": 78, "exp": 1497077},
    {"level": 79, "exp": 1574739},
    {"level": 80, "exp": 1655384},
    {"level": 81, "exp": 1739070},
    {"level": 82, "exp": 1825878},
    {"level": 83, "exp": 1915922},
    {"level": 84, "exp": 2009263},
    {"level": 85, "exp": 2105960},
    {"level": 86, "exp": 2202072},
    {"level": 87, "exp": 2309746},
    {"level": 88, "exp": 2417043},
    {"level": 89, "exp": 2528027},
    {"level": 90, "exp": 2642760},
    {"level": 91, "exp": 2761368},
    {"level": 92, "exp": 2883942},
    {"level": 93, "exp": 3010550},
    {"level": 94, "exp": 3141254},
    {"level": 95, "exp": 3276189},
    {"level": 96, "exp": 3415421},
    {"level": 97, "exp": 3559046},
    {"level": 98, "exp": 3707134},
    {"level": 99, "exp": 3859822},
    {"level": 100,"exp": 4017279},
    {"level": 101, "exp": 4179279},
    {"level": 102, "exp": 4346220},
    {"level": 103, "exp": 4518147},
    {"level": 104, "exp": 4695132},
    {"level": 105, "exp": 4877250},
    {"level": 106, "exp": 5064574},
    {"level": 107, "exp": 5257285},
    {"level": 108, "exp": 5455458},
    {"level": 109, "exp": 5659171},
    {"level": 110, "exp": 5868500},
    {"level": 111, "exp": 6083599},
    {"level": 112, "exp": 6304581},
    {"level": 113, "exp": 6531524},
    {"level": 114, "exp": 6764509},
    {"level": 115, "exp": 7003696},
    {"level": 116, "exp": 7249165},
    {"level": 117, "exp": 7501034},
    {"level": 118, "exp": 7759385},
    {"level": 119, "exp": 8024384},
    {"level": 120, "exp": 8296116},
    {"level": 121, "exp": 8574665},
    {"level": 122, "exp": 8860152},
    {"level": 123, "exp": 9152750},
    {"level": 124, "exp": 9452545},
    {"level": 125, "exp": 9759625},
    {"level": 126, "exp": 10074078},
    {"level": 127, "exp": 10396118},
    {"level": 128, "exp": 10725837},
    {"level": 129, "exp": 11063324},
    {"level": 130, "exp": 11408670},
    {"level": 131, "exp": 11762058},
    {"level": 132, "exp": 12123619},
    {"level": 133, "exp": 12493448},
    {"level": 134, "exp": 12871638},
    {"level": 135, "exp": 13258377},
    {"level": 136, "exp": 13653761},
    {"level": 137, "exp": 14057962},
    {"level": 138, "exp": 14470970},
    {"level": 139, "exp": 14893086},
    {"level": 140, "exp": 15324372},
    {"level": 141, "exp": 15764928},
    {"level": 142, "exp": 16214895},
    {"level": 143, "exp": 16674472},
    {"level": 144, "exp": 17143762},
    {"level": 145, "exp": 17622865},
    {"level": 146, "exp": 18111884},
    {"level": 147, "exp": 18611067},
    {"level": 148, "exp": 19120520},
    {"level": 149, "exp": 19640346},
    {"level": 150, "exp": 20170650},
    {"level": 151, "exp": 20711643},
    {"level": 152, "exp": 21263478},
    {"level": 153, "exp": 21826261},
    {"level": 154, "exp": 22400101},
    {"level": 155, "exp": 22985214},
    {"level": 156, "exp": 23581709},
    {"level": 157, "exp": 24189744},
    {"level": 158, "exp": 24809429},
    {"level": 159, "exp": 25440986},
    {"level": 160, "exp": 26084528},
    {"level": 161, "exp": 26740168},
    {"level": 162, "exp": 27408067},
    {"level": 163, "exp": 28088453},
    {"level": 164, "exp": 28781442},
    {"level": 165, "exp": 29487150},
    {"level": 166, "exp": 30205692},
    {"level": 167, "exp": 30937351},
    {"level": 168, "exp": 31682246},
    {"level": 169, "exp": 32440496},
    {"level": 170, "exp": 33212220},
    {"level": 171, "exp": 33997656},
    {"level": 172, "exp": 34796976},
    {"level": 173, "exp": 35610303},
    {"level": 174, "exp": 36437758},
    {"level": 175, "exp": 37279585},
    {"level": 176, "exp": 38135909},    
    {"level": 177, "exp": 39006906},
    {"level": 178, "exp": 39892701},
    {"level": 179, "exp": 40793545},
    {"level": 180, "exp": 41709564},
    {"level": 181, "exp": 42640885},
    {"level": 182, "exp": 43587690},
    {"level": 183, "exp": 44550234},
    {"level": 184, "exp": 45528647},
    {"level": 185, "exp": 46523060},
    {"level": 186, "exp": 47533602},
    {"level": 187, "exp": 48560590},
    {"level": 188, "exp": 49604157},    
    {"level": 189, "exp": 50664436},
    {"level": 190, "exp": 51741560},
    {"level": 191, "exp": 52835795},
    {"level": 192, "exp": 53947334},
    {"level": 193, "exp": 55076314},
    {"level": 194, "exp": 56222868},
    {"level": 195, "exp": 57378272},
    {"level": 196, "exp": 58569661},
    {"level": 197, "exp": 59770233},
    {"level": 198, "exp": 60989128},
    {"level": 199, "exp": 62226623},
    {"level": 200, "exp": 63482860},
    {"level": 201, "exp": 64709427},
    {"level": 202, "exp": 67311959},
    {"level": 203, "exp": 67311959},
    {"level": 204, "exp": 68642232},
    {"level": 205, "exp": 69992098},
    {"level": 206, "exp": 71361745},
    {"level": 207, "exp": 72751367},
    {"level": 208, "exp": 74161156},
    {"level": 209, "exp": 75591305},
    {"level": 210, "exp": 77042009},
    {"level": 211, "exp": 78513463},
    {"level": 212, "exp": 80005865},
    {"level": 213, "exp": 81519410},
    {"level": 214, "exp": 83054298},
    {"level": 215, "exp": 84610728},
    {"level": 216, "exp": 86188897},
    {"level": 217, "exp": 87789009},
    {"level": 218, "exp": 89411266},
    {"level": 219, "exp": 91055869},
    {"level": 220, "exp": 92723023},
    {"level": 221, "exp": 94442932},
    {"level": 222, "exp": 96125802},
    {"level": 223, "exp": 97861839},
    {"level": 224, "exp": 99621251},

    {"level": 225, "exp": 68642232},
    {"level": 205, "exp": 69992098},
    {"level": 206, "exp": 71361745},
    {"level": 207, "exp": 72751367},
    {"level": 208, "exp": 74161156},
    {"level": 209, "exp": 75591305},
    {"level": 210, "exp": 77042009},
    {"level": 211, "exp": 78513463},
    {"level": 212, "exp": 80005865},
    {"level": 213, "exp": 81519410},
    {"level": 214, "exp": 83054298},
    {"level": 215, "exp": 84610728},
    {"level": 216, "exp": 86188897},
    {"level": 217, "exp": 87789009},
    {"level": 218, "exp": 89411266},
    {"level": 219, "exp": 91055869},
    {"level": 220, "exp": 92723023},
    {"level": 221, "exp": 94442932},
    {"level": 222, "exp": 96125802},
    {"level": 223, "exp": 97861839},
    {"level": 224, "exp": 99621251},





    
]


(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 92.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C579D015_CA18_6EE6_41DD_C9CCA49BE09E",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_2B568074_34FD_4B7B_41C8_699EB5A956EE",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2F5A6447_34EE_CAA5_41BD_D971EB829199_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_2F5A6447_34EE_CAA5_41BD_D971EB829199_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_2F5A6447_34EE_CAA5_41BD_D971EB829199_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_2F5A6447_34EE_CAA5_41BD_D971EB829199_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan 4",
 "adjacentPanoramas": [
  {
   "backwardYaw": 14.4,
   "yaw": -123.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83"
  },
  {
   "backwardYaw": -27.83,
   "yaw": 156.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774"
  }
 ],
 "thumbnailUrl": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_t.jpg",
 "id": "panorama_2C369136_34B5_4AE4_41A2_74334360BD9B",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2ED075E9_3495_556C_41B8_40B642A128E3",
  "this.overlay_2E7542E6_3496_CF67_41C2_CE6622E66106"
 ]
},
{
 "rotationY": 0,
 "yaw": 156.68,
 "popupMaxHeight": "95%",
 "showDuration": 0,
 "showEasing": "cubic_in",
 "hfov": 9.79,
 "hideDuration": 0,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2D892AA0_3497_DF9B_419C_B951F789EB49",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2D892AA0_3497_DF9B_419C_B951F789EB49_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 4.09,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "items": [
  {
   "media": "this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "camera": "this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -165.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5216F98_CA18_71EE_41DF_8D9B20A33639",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "yaw": -98.51,
 "popupMaxHeight": "95%",
 "showDuration": 0,
 "showEasing": "cubic_in",
 "hfov": 8.21,
 "hideDuration": 0,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_29E915A4_34F7_359B_41C8_D4B21CE852FE",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_29E915A4_34F7_359B_41C8_D4B21CE852FE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -10.31,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "yaw": -143.38,
 "popupMaxHeight": "95%",
 "showDuration": 0,
 "showEasing": "cubic_in",
 "hfov": 9.35,
 "hideDuration": 0,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2F103395_34EE_CDA4_41C6_929FB8F004C8",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2F103395_34EE_CDA4_41C6_929FB8F004C8_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -6.75,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 78.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4FA4F4A_CA18_7162_41B2_49A7CEBF0DEE",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 167.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5BCD063_CA18_6F22_41E7_0FBB0F846F96",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "id": "ImageResource_2B55F064_34FD_4A9B_4186_3E77FF15E028",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2D892AA0_3497_DF9B_419C_B951F789EB49_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_2D892AA0_3497_DF9B_419C_B951F789EB49_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_2D892AA0_3497_DF9B_419C_B951F789EB49_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_2D892AA0_3497_DF9B_419C_B951F789EB49_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "id": "ImageResource_2B50E074_34FD_4B7B_41C3_C8E8778DA981",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_29E915A4_34F7_359B_41C8_D4B21CE852FE_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_29E915A4_34F7_359B_41C8_D4B21CE852FE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_29E915A4_34F7_359B_41C8_D4B21CE852FE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_29E915A4_34F7_359B_41C8_D4B21CE852FE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Makam",
 "adjacentPanoramas": [
  {
   "backwardYaw": 69.69,
   "yaw": 167.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4"
  }
 ],
 "thumbnailUrl": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_t.jpg",
 "id": "panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_28FDF928_34F5_5AEB_41BA_06A827E034F0",
  "this.overlay_2870CD7E_34F6_D567_41C7_12798CBB65FA",
  "this.popup_29E915A4_34F7_359B_41C8_D4B21CE852FE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -15.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5AC8054_CA18_6F65_41DF_EC8072D79F11",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -12.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4E58F0B_CA18_72E2_41E3_BCB9D5471D9E",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 7.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C50F5F5A_CA18_716D_41D4_A88A9E5C8C43",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 100.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C540DFC7_CA18_7162_41E3_79B32490866C",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Mihrab",
 "adjacentPanoramas": [
  {
   "backwardYaw": 164.77,
   "yaw": 21.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774"
  },
  {
   "backwardYaw": -12.19,
   "yaw": -172.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB"
  }
 ],
 "thumbnailUrl": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_t.jpg",
 "id": "panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2F8B3112_34ED_4ABC_41B9_84FADF643E75",
  "this.overlay_2FF919CD_34ED_5DA5_41B5_02C964192267",
  "this.overlay_2FE3F76C_34ED_556B_41B0_2F50537128BF",
  "this.overlay_2FC3A0A1_34ED_4B9C_41C1_DC860BAD34BE",
  "this.popup_2F5A6447_34EE_CAA5_41BD_D971EB829199",
  "this.popup_2F103395_34EE_CDA4_41C6_929FB8F004C8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 21.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5776006_CA18_6EE5_4195_83BC82DA2630",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -159.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C51BEF79_CA18_712E_41E8_3910756C4CB2",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan 2",
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.64,
   "yaw": 20.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83"
  },
  {
   "backwardYaw": -87.46,
   "yaw": 109.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB"
  }
 ],
 "thumbnailUrl": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_t.jpg",
 "id": "panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2E94D847_349D_DAA5_41A5_3A91C5C6C5B1",
  "this.overlay_2E2FAD94_349D_F5A4_41AE_B543FA3FFC60"
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Gerbang Masuk Masjid",
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.72,
   "yaw": -101.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB"
  }
 ],
 "thumbnailUrl": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_t.jpg",
 "id": "panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2D3C1C9C_34AD_FBA4_419A_BF8080379FB6",
  "this.overlay_2DF006F3_34AD_377D_41C2_0505E0FDFBEF",
  "this.popup_2D892AA0_3497_DF9B_419C_B951F789EB49"
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan 3",
 "adjacentPanoramas": [
  {
   "backwardYaw": -123.46,
   "yaw": 14.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B"
  },
  {
   "backwardYaw": 20.13,
   "yaw": -158.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B"
  }
 ],
 "thumbnailUrl": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_t.jpg",
 "id": "panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2F192DDF_3493_35A5_41A5_F38D74EB7D49",
  "this.overlay_2886C34C_3493_4EAB_41C3_F179238FD839"
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Dalam Masjid",
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.95,
   "yaw": -79.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774"
  }
 ],
 "thumbnailUrl": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_t.jpg",
 "id": "panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_28E77ECA_34F3_F7AC_41B8_B432DAF9B076"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan 1",
 "adjacentPanoramas": [
  {
   "backwardYaw": 109.72,
   "yaw": -87.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B"
  },
  {
   "backwardYaw": -101.76,
   "yaw": 91.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92"
  },
  {
   "backwardYaw": -172.96,
   "yaw": -12.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F"
  }
 ],
 "thumbnailUrl": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_t.jpg",
 "id": "panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2D39921F_349F_4EA4_41B6_6ED0AF42B293",
  "this.overlay_2D5DA559_349F_4AAC_41AD_E44BFD52D88A",
  "this.overlay_2EAABC5E_349F_5AA4_41A1_4F3A9D11BD8A"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -70.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4F55F2B_CA18_7122_41D5_67D81E48FBD7",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -158.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5661FF6_CA18_7122_41DF_0D174F4F24CA",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Menara",
 "adjacentPanoramas": [
  {
   "backwardYaw": -115.22,
   "yaw": 35.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4"
  },
  {
   "backwardYaw": -79.57,
   "yaw": 86.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551"
  },
  {
   "backwardYaw": 156.77,
   "yaw": -27.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B"
  },
  {
   "backwardYaw": 21.36,
   "yaw": 164.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F"
  }
 ],
 "thumbnailUrl": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_t.jpg",
 "id": "panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2F1FAE3D_34EE_D6E5_419D_FDD0A59E9825",
  "this.overlay_28B7102F_34ED_4AE5_41B2_CEADD16A2E7D",
  "this.overlay_2F321C3D_34ED_DAE4_41C2_74356F06CD86",
  "this.overlay_28B47978_34ED_3D6B_41AE_BFFE42A241A1"
 ]
},
{
 "rotationY": 0,
 "yaw": -68.52,
 "popupMaxHeight": "95%",
 "showDuration": 0,
 "showEasing": "cubic_in",
 "hfov": 9.35,
 "hideDuration": 0,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2F5A6447_34EE_CAA5_41BD_D971EB829199",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2F5A6447_34EE_CAA5_41BD_D971EB829199_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -6.75,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_2B56D074_34FD_4B7B_41C4_13DCE06B3BCB",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_2F103395_34EE_CDA4_41C6_929FB8F004C8_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_2F103395_34EE_CDA4_41C6_929FB8F004C8_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_2F103395_34EE_CDA4_41C6_929FB8F004C8_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_2F103395_34EE_CDA4_41C6_929FB8F004C8_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_C56FEBFF_C9E8_7122_41D5_3AC112C431E9",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_C56FEBFF_C9E8_7122_41D5_3AC112C431E9.ogg",
  "mp3Url": "media/audio_C56FEBFF_C9E8_7122_41D5_3AC112C431E9.mp3"
 },
 "data": {
  "label": "Whitesand - Adventure Begins [Orchestral]_yj7g27GDVrY"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Puing Bangunan",
 "adjacentPanoramas": [
  {
   "backwardYaw": 35.17,
   "yaw": -115.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774"
  },
  {
   "backwardYaw": 167.46,
   "yaw": 69.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14"
  }
 ],
 "thumbnailUrl": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_t.jpg",
 "id": "panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_28C8AA23_34F5_3E9C_4194_17D2E69A1191",
  "this.overlay_2879C9D3_34F5_5DBC_41A6_DF76E0138B5B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -93.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C59B0044_CA18_6F66_41E8_314EAAD2D05E",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -23.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5533FD7_CA18_7163_41D7_287A0E590C85",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 4000,
   "targetHfov": 131,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -144.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4DA6EFC_CA18_7326_41A9_1802F3ACE745",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -88.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5896025_CA18_6F26_41DC_2E0AA7C4A6E0",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 152.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5366FA8_CA18_712E_41C2_03B5034AD717",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 0, 1)",
   "camera": "this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 1, 2)",
   "camera": "this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 2, 3)",
   "camera": "this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 3, 4)",
   "camera": "this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 4, 5)",
   "camera": "this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 5, 6)",
   "camera": "this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 6, 7)",
   "camera": "this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 7, 8)",
   "camera": "this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 8, 9)",
   "camera": "this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist, 9, 0)",
   "camera": "this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 56.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C5162F69_CA18_712E_41D7_B14D310B588E",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 64.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C53DBFB7_CA18_7122_41BC_45FC7895A571",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": -110.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4EDDF1B_CA18_72E2_41E3_7136A2A51A81",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 40,
 "initialPosition": {
  "hfov": 131,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 1043,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_camera",
 "manualRotationSpeed": 1298,
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#333333"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 1,
 "paddingLeft": 0,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_23374AC7_33B6_1847_419D_531B050E177A",
  "this.Container_23376AC7_33B6_1847_41B2_B5408D58E025"
 ],
 "id": "Container_2336FAC7_33B6_1847_41C0_996782E1591E",
 "paddingLeft": 0,
 "width": 115.05,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "paddingTop": 0,
 "height": 603,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--SETTINGS"
 },
 "propagateClick": true,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_234F89A3_33AA_18FE_41A2_292F21B6573C"
 ],
 "id": "Container_234FD9A3_33AA_18FE_41B4_451D746CF08E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "right": "0%",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E, false, 0, null, null, false)",
 "shadow": false,
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "shadow": false,
 "minHeight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent4307"
 },
 "visible": false,
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingTop": 0,
 "shadow": false,
 "minHeight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage4308"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "borderRadius": 0
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "iconHeight": 20,
 "minWidth": 0,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "top": 10,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "gap": 5,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "shadow": false,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 0,
 "paddingBottom": 5,
 "fontStyle": "normal",
 "iconWidth": 20,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "class": "CloseButton",
 "fontWeight": "normal",
 "cursor": "hand",
 "data": {
  "name": "CloseButton4309"
 },
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "maxWidth": 58,
 "id": "IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597_pressed_rollover.png",
 "width": 38,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597_pressed.png",
 "shadow": false,
 "height": 38,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "maxWidth": 58,
 "id": "IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21_pressed_rollover.png",
 "width": 38,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21_pressed.png",
 "shadow": false,
 "height": 38,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "cursor": "hand",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 4",
   "click": "this.startPanoramaWithCamera(this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83, this.camera_C5216F98_CA18_71EE_41DF_8D9B20A33639); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.14,
   "pitch": -12.5,
   "yaw": -123.46,
   "image": "this.AnimatedImageResource_2B673045_34FD_4AA5_41A1_C8168404540F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2ED075E9_3495_556C_41B8_40B642A128E3",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.14,
   "yaw": -123.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Pondasi Bangunan Menara",
   "click": "this.startPanoramaWithCamera(this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774, this.camera_C5366FA8_CA18_712E_41C2_03B5034AD717); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.19,
   "pitch": -21.5,
   "yaw": 156.77,
   "image": "this.AnimatedImageResource_2B67E054_34FD_4AA4_41A6_D03739F2D7AB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2E7542E6_3496_CF67_41C2_CE6622E66106",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.19,
   "yaw": 156.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Puing-puing Bangunan",
   "click": "this.startPanoramaWithCamera(this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4, this.camera_C4EDDF1B_CA18_72E2_41E3_7136A2A51A81); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.71,
   "pitch": -30.79,
   "yaw": 167.46,
   "image": "this.AnimatedImageResource_2B636054_34FD_4AA4_41AE_96566E4BCFD2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28FDF928_34F5_5AEB_41BA_06A827E034F0",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.71,
   "yaw": 167.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Batu Nisan",
   "click": "this.showPopupPanoramaOverlay(this.popup_29E915A4_34F7_359B_41C8_D4B21CE852FE, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B50E074_34FD_4B7B_41C3_C8E8778DA981, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_1_HS_1_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ]
   },
   "pitch": -10.31,
   "yaw": -98.51,
   "distance": 50
  }
 ],
 "id": "overlay_2870CD7E_34F6_D567_41C7_12798CBB65FA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.21,
   "yaw": -98.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Pondasi Bangunan Menara",
   "click": "this.startPanoramaWithCamera(this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774, this.camera_C5AC8054_CA18_6F65_41DF_EC8072D79F11); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.03,
   "pitch": -22.73,
   "yaw": 21.36,
   "image": "this.AnimatedImageResource_2B665054_34FD_4AA4_41C6_F3A88C107BFF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F8B3112_34ED_4ABC_41B9_84FADF643E75",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.03,
   "yaw": 21.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 1",
   "click": "this.startPanoramaWithCamera(this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB, this.camera_C5BCD063_CA18_6F22_41E7_0FBB0F846F96); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.03,
   "pitch": -22.73,
   "yaw": -172.96,
   "image": "this.AnimatedImageResource_2B663054_34FD_4AA4_4184_7A2067D7AC4A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2FF919CD_34ED_5DA5_41B5_02C964192267",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.03,
   "yaw": -172.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Mihrab",
   "click": "this.showPopupPanoramaOverlay(this.popup_2F5A6447_34EE_CAA5_41BD_D971EB829199, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B568074_34FD_4B7B_41C8_699EB5A956EE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_2_0.png",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ]
   },
   "pitch": -6.75,
   "yaw": -68.52,
   "distance": 50
  }
 ],
 "id": "overlay_2FE3F76C_34ED_556B_41B0_2F50537128BF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -68.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Makam",
   "click": "this.showPopupPanoramaOverlay(this.popup_2F103395_34EE_CDA4_41C6_929FB8F004C8, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B56D074_34FD_4B7B_41C4_13DCE06B3BCB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_3_0.png",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ]
   },
   "pitch": -6.75,
   "yaw": -143.38,
   "distance": 50
  }
 ],
 "id": "overlay_2FC3A0A1_34ED_4B9C_41C1_DC860BAD34BE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -143.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 3",
   "click": "this.startPanoramaWithCamera(this.panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83, this.camera_C5776006_CA18_6EE5_4195_83BC82DA2630); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.73,
   "pitch": -17,
   "yaw": 20.13,
   "image": "this.AnimatedImageResource_2B658045_34FD_4AA5_41B8_44DDCCE3B9A7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2E94D847_349D_DAA5_41A5_3A91C5C6C5B1",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.73,
   "yaw": 20.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 2",
   "click": "this.startPanoramaWithCamera(this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB, this.camera_C579D015_CA18_6EE6_41DD_C9CCA49BE09E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20,
   "pitch": -14.14,
   "yaw": 109.72,
   "image": "this.AnimatedImageResource_2B647045_34FD_4AA5_41C6_E40169B79F1C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2E2FAD94_349D_F5A4_41AE_B543FA3FFC60",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20,
   "yaw": 109.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 1",
   "click": "this.startPanoramaWithCamera(this.panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB, this.camera_C5896025_CA18_6F26_41DC_2E0AA7C4A6E0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.27,
   "pitch": -21.11,
   "yaw": -101.76,
   "image": "this.AnimatedImageResource_2B7BD045_34FD_4AA5_4190_015460A98CE8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D3C1C9C_34AD_FBA4_419A_BF8080379FB6",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.27,
   "yaw": -101.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Keterangan Masjid Pancinan Tinggi",
   "click": "this.showPopupPanoramaOverlay(this.popup_2D892AA0_3497_DF9B_419C_B951F789EB49, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B55F064_34FD_4A9B_4186_3E77FF15E028, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.79,
   "pitch": 4.09,
   "yaw": 156.68,
   "image": "this.AnimatedImageResource_2B7A0045_34FD_4AA5_41C3_3576EFE49CFA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2DF006F3_34AD_377D_41C2_0505E0FDFBEF",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.79,
   "yaw": 156.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 4",
   "click": "this.startPanoramaWithCamera(this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B, this.camera_C5162F69_CA18_712E_41D7_B14D310B588E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.3,
   "pitch": -20.68,
   "yaw": 14.4,
   "image": "this.AnimatedImageResource_2B643045_34FD_4AA5_41BE_042485B2EAED",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F192DDF_3493_35A5_41A5_F38D74EB7D49",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.3,
   "yaw": 14.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 3",
   "click": "this.startPanoramaWithCamera(this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B, this.camera_C51BEF79_CA18_712E_41E8_3910756C4CB2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.59,
   "pitch": -18.23,
   "yaw": -158.64,
   "image": "this.AnimatedImageResource_2B649045_34FD_4AA5_41C2_E1269013D097",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2886C34C_3493_4EAB_41C3_F179238FD839",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.59,
   "yaw": -158.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Keluar Masjid",
   "click": "this.startPanoramaWithCamera(this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774, this.camera_C59B0044_CA18_6F66_41E8_314EAAD2D05E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.44,
   "pitch": -25.16,
   "yaw": -79.57,
   "image": "this.AnimatedImageResource_2B674045_34FD_4AA5_41BF_F78647D08927",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28E77ECA_34F3_F7AC_41B8_B432DAF9B076",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.44,
   "yaw": -79.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 2",
   "click": "this.startPanoramaWithCamera(this.panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B, this.camera_C4F55F2B_CA18_7122_41D5_67D81E48FBD7); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.14,
   "pitch": -21.91,
   "yaw": -87.46,
   "image": "this.AnimatedImageResource_2B7A9045_34FD_4AA5_41BE_BA8CC17809A1",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D39921F_349F_4EA4_41B6_6ED0AF42B293",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.14,
   "yaw": -87.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 1",
   "click": "this.startPanoramaWithCamera(this.panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92, this.camera_C4FA4F4A_CA18_7162_41B2_49A7CEBF0DEE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.07,
   "pitch": -13.32,
   "yaw": 91.72,
   "image": "this.AnimatedImageResource_2B657045_34FD_4AA5_41BD_F8C5EF067612",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D5DA559_349F_4AAC_41AD_E44BFD52D88A",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.07,
   "yaw": 91.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Puing-puing bangunan masjid",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F, this.camera_C50F5F5A_CA18_716D_41D4_A88A9E5C8C43); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.54,
   "pitch": -26,
   "yaw": -12.19,
   "image": "this.AnimatedImageResource_2B652045_34FD_4AA5_41B7_0EC602E9E3C7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2EAABC5E_349F_5AA4_41A1_4F3A9D11BD8A",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.54,
   "yaw": -12.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Jalur Jalan 4",
   "click": "this.startPanoramaWithCamera(this.panorama_2C369136_34B5_4AE4_41A2_74334360BD9B, this.camera_C5533FD7_CA18_7163_41D7_287A0E590C85); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.58,
   "pitch": -12.19,
   "yaw": -27.83,
   "image": "this.AnimatedImageResource_2B611054_34FD_4AA4_41C5_E8B94623DA1F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F1FAE3D_34EE_D6E5_419D_FDD0A59E9825",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": -27.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Puing-puing bangunan masjid",
   "click": "this.startPanoramaWithCamera(this.panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4, this.camera_C53DBFB7_CA18_7122_41BC_45FC7895A571); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.83,
   "pitch": -5.24,
   "yaw": 35.17,
   "image": "this.AnimatedImageResource_2B61F054_34FD_4AA4_41C5_F8A3C84F19D4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28B7102F_34ED_4AE5_41B2_CEADD16A2E7D",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 35.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Masuk dalam masjid",
   "click": "this.startPanoramaWithCamera(this.panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551, this.camera_C540DFC7_CA18_7162_41E3_79B32490866C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "pitch": 2.23,
   "yaw": 86.95,
   "image": "this.AnimatedImageResource_2B61A054_34FD_4AA4_41C8_5DF717668B54",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F321C3D_34ED_DAE4_41C2_74356F06CD86",
 "data": {
  "label": "Circle Generic 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 86.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Puing-puing bangunan masjid",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F, this.camera_C5661FF6_CA18_7122_41DF_0D174F4F24CA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.56,
   "pitch": -45.41,
   "yaw": 164.77,
   "image": "this.AnimatedImageResource_28104146_34F3_CAA4_41B8_2E453F32FA52",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28B47978_34ED_3D6B_41AE_BFFE42A241A1",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.56,
   "yaw": 164.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Makam",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14, this.camera_C4E58F0B_CA18_72E2_41E3_BCB9D5471D9E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.57,
   "pitch": -25.06,
   "yaw": 69.69,
   "image": "this.AnimatedImageResource_2B60C054_34FD_4AA4_41C4_FC7B413F570F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28C8AA23_34F5_3E9C_4194_17D2E69A1191",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.57,
   "yaw": 69.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "toolTip": "Pondasi Bangunan Menara",
   "click": "this.startPanoramaWithCamera(this.panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774, this.camera_C4DA6EFC_CA18_7326_41A9_1802F3ACE745); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.73,
   "pitch": -23.83,
   "yaw": -115.22,
   "image": "this.AnimatedImageResource_2B60B054_34FD_4AA4_41B8_CD759CBC965C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2879C9D3_34F5_5DBC_41A6_DF76E0138B5B",
 "data": {
  "label": "Circle Arrow 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.73,
   "yaw": -115.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.83
  }
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_23375AC7_33B6_1847_41A2_DE89BEF8BC0F"
 ],
 "id": "Container_23374AC7_33B6_1847_419D_531B050E177A",
 "paddingLeft": 0,
 "width": 110,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "paddingTop": 0,
 "height": 110,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_2336DAC7_33B6_1847_41AD_EA66C9E3B674",
  "this.IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597",
  "this.IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21"
 ],
 "id": "Container_23376AC7_33B6_1847_41B2_B5408D58E025",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "14.04%",
 "contentOpaque": false,
 "paddingRight": 4,
 "width": "91.304%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 8,
 "paddingTop": 0,
 "shadow": false,
 "height": "85.96%",
 "minHeight": 1,
 "paddingBottom": 2,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_234F99A3_33AA_18FE_418B_E4AE62DBE584",
  "this.Container_22975C8D_33AA_F8CB_41C6_B01508B6BD83",
  "this.Container_234FA9A3_33AA_18FE_41B4_BA9331DE9A75"
 ],
 "id": "Container_234F89A3_33AA_18FE_41A2_292F21B6573C",
 "left": "15%",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "right": "15%",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadowOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "shadow": true,
 "shadowSpread": 1,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B673045_34FD_4AA5_41A1_C8168404540F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C369136_34B5_4AE4_41A2_74334360BD9B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B67E054_34FD_4AA4_41A6_D03739F2D7AB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C1B5FE8_34B6_D56C_41B7_57D300D9DB14_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B636054_34FD_4AA4_41AE_96566E4BCFD2",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B665054_34FD_4AA4_41C6_F3A88C107BFF",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C1B1DD8_34B7_55AB_4173_A4DF7263FA1F_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B663054_34FD_4AA4_4184_7A2067D7AC4A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B658045_34FD_4AA5_41B8_44DDCCE3B9A7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C24826B_34B5_CF6D_41A5_EC9BDFC3CF8B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B647045_34FD_4AA5_41C6_E40169B79F1C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B7BD045_34FD_4AA5_4190_015460A98CE8",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C19D5E1_34B2_D59C_41BC_7B04B7235C92_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B7A0045_34FD_4AA5_41C3_3576EFE49CFA",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B643045_34FD_4AA5_41BE_042485B2EAED",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C18B321_34B5_CE9D_41B0_2E96B8BB6D83_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B649045_34FD_4AA5_41C2_E1269013D097",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E9504FA_34B3_4B6F_41B8_BABDD4308551_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B674045_34FD_4AA5_41BF_F78647D08927",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B7A9045_34FD_4AA5_41BE_BA8CC17809A1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B657045_34FD_4AA5_41BD_F8C5EF067612",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C19B36B_34B5_4D6D_41BE_F90B765585CB_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B652045_34FD_4AA5_41B7_0EC602E9E3C7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B611054_34FD_4AA4_41C5_E8B94623DA1F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B61F054_34FD_4AA4_41C5_F8A3C84F19D4",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B61A054_34FD_4AA4_41C8_5DF717668B54",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C231F56_34B7_36A7_41B0_5EC026A2E774_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_28104146_34F3_CAA4_41B8_2E453F32FA52",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B60C054_34FD_4AA4_41C4_FC7B413F570F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C201F87_34B7_F5A4_41B9_55E924759EA4_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2B60B054_34FD_4AA4_41B8_CD759CBC965C",
 "frameDuration": 41
},
{
 "transparencyActive": true,
 "maxWidth": 60,
 "id": "IconButton_23375AC7_33B6_1847_41A2_DE89BEF8BC0F",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_23375AC7_33B6_1847_41A2_DE89BEF8BC0F_pressed_rollover.png",
 "width": 40,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_23375AC7_33B6_1847_41A2_DE89BEF8BC0F.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_23376AC7_33B6_1847_41B2_B5408D58E025.get('visible')){ this.setComponentVisibility(this.Container_23376AC7_33B6_1847_41B2_B5408D58E025, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_23376AC7_33B6_1847_41B2_B5408D58E025, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_23375AC7_33B6_1847_41A2_DE89BEF8BC0F_pressed.png",
 "shadow": false,
 "height": 40,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "maxWidth": 58,
 "id": "IconButton_2336DAC7_33B6_1847_41AD_EA66C9E3B674",
 "paddingLeft": 0,
 "width": 38,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2336DAC7_33B6_1847_41AD_EA66C9E3B674.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2336DAC7_33B6_1847_41AD_EA66C9E3B674_rollover.png",
 "paddingTop": 0,
 "click": "if(!this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E.get('visible')){ this.setComponentVisibility(this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E, false, 0, null, null, false) }",
 "shadow": false,
 "height": 38,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumbline"
 },
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "cursor": "hand",
 "borderRadius": 0
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_234F99A3_33AA_18FE_418B_E4AE62DBE584",
 "toolTipOpacity": 1,
 "paddingLeft": 0,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_22974C8D_33AA_F8CB_41AD_A3183A986DA3",
  "this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7"
 ],
 "id": "Container_22975C8D_33AA_F8CB_41C6_B01508B6BD83",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "right": "0%",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.35,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadow": true,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "borderRadius": 0
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_234FB9A3_33AA_18FE_41BC_FC6AF27F414E"
 ],
 "id": "Container_234FA9A3_33AA_18FE_41B4_BA9331DE9A75",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "height": 140,
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "overflow": "scroll",
 "propagateClick": false,
 "borderRadius": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.HTMLText_22973C8D_33AA_F8CB_41C5_829CCDAA6D35"
 ],
 "id": "Container_22974C8D_33AA_F8CB_41AD_A3183A986DA3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#333333"
 ],
 "width": "100%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "height": 80,
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "class": "Container",
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 70,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "rollOverItemLabelFontSize": 16,
 "itemMode": "normal",
 "scrollBarColor": "#FFFFFF",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Poppins",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#FFFFFF",
 "minWidth": 1,
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontColor": "#FFFFFF",
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadowColor": "#FFFFFF",
 "height": "100%",
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "minHeight": 1,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "class": "ThumbnailGrid",
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontSize": 16,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#999999",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": "12px",
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50,
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 30,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList5161"
 },
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "id": "IconButton_234FB9A3_33AA_18FE_41BC_FC6AF27F414E",
 "paddingLeft": 0,
 "right": 20,
 "width": 40,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_234FB9A3_33AA_18FE_41BC_FC6AF27F414E.png",
 "minWidth": 40,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_234FB9A3_33AA_18FE_41BC_FC6AF27F414E_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E, false, 0, null, null, false)",
 "shadow": false,
 "height": 41,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 40,
 "propagateClick": false,
 "class": "IconButton",
 "cursor": "hand",
 "borderRadius": 0
},
{
 "id": "HTMLText_22973C8D_33AA_F8CB_41C5_829CCDAA6D35",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "right": "22.88%",
 "borderSize": 0,
 "paddingLeft": 35,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 17,
 "shadow": false,
 "height": 80,
 "minHeight": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:2.99vh;font-family:'Poppins';\"><B>PANORAMA LIST</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "borderRadius": 0
}],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_2336FAC7_33B6_1847_41C0_996782E1591E",
  "this.Container_234FD9A3_33AA_18FE_41B4_451D746CF08E",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "start": "this.playAudioList([this.audio_C56FEBFF_C9E8_7122_41D5_3AC112C431E9]); this.init(); this.syncPlaylists([this.ThumbnailGrid_22971C8D_33AA_F8CB_41BE_C99F548146B7_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "buttonToggleFullscreen": "this.IconButton_2336CAC7_33B6_1847_41C5_BCE9A6DF9597",
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "mouseWheelEnabled": true,
 "minHeight": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Player435"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "class": "Player",
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_C73DCEFB_CA18_3323_41A0_9DC35F84CF21",
 "borderRadius": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

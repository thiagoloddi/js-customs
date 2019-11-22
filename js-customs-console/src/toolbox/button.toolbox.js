const buttonToolbox = [
  { label: 'BOX', 
    sections: [
      { label: 'Dimensions', 
        type: 'dimension', 
        units: [{ label: "auto" }, { label: "px" }, { label: "rem" }],
        props: [
          { label: 'Height', id: 'height' },
          { label: 'Width', id: 'width' },
        ] 
      },
      { label: 'Padding', 
        type: 'dimension', 
        units: [{ label: "%" }, { label: "px" }, { label: "rem" }],
        props: [
          { label: 'Top', id: 'padding-top',  },
          { label: 'Right', id: 'padding-right' },
          { label: 'Bottom', id: 'padding-bottom' },
          { label: 'Left', id: 'padding-left' },
        ] 
      },
      {
        label: 'Background Color',
        type: 'color',
        id: 'background-color'
      }
    ]
  },
  {
    label: 'FONT',
    sections: [
      {
        label: 'Size'
      }
    ]
  }
];

export default buttonToolbox;
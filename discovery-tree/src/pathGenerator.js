import {enrichedCategories} from './meta-data';

export const buildPath = (seenTags) => {
    console.log(seenTags);
    const setCategoryViewedStatus = category => {
        category.name = category.title;
        if(seenTags.includes(category.title)) {
            category.is_viewed = true;
        }
        if (category.children && category.children.length > 0) {
            category.children.forEach(setCategoryViewedStatus)
        };

        category.attributes = { modules: category.children?.length };
        return category;
    };

    const path = { name: "Discover Yourself", children: enrichedCategories.map(setCategoryViewedStatus)}
    console.log(path);

    return path;
};

// const path = {
//   name: 'Discover Yourself',
//   children: [
//     {
//       name: 'BDSM',
//       attributes: {
//         modules: 2,
//       },
//       children: [
//         {
//           name: 'Bondage',
//           is_viewed: true,
//           attributes: {
//             techniques: 2,
//           },
//           children: [
//             {
//               name: 'Technique 1',
//               is_viewed: true,
//             },
//             {
//               name: 'Technique 2',
//               is_viewed: true,
//             },
//           ],
//         },
//         {
//           name: 'Impact',
//           attributes: {
//             techniques: 2,
//           },
//           children: [
//             {
//               name: 'Technique 1',
//               is_viewed: true,
//             },
//             {
//               name: 'Technique 2',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'XYZ',
//       attributes: {
//         modules: 2,
//       },
//       children: [
//         {
//           name: 'ABC',
//           is_viewed: true,
//           attributes: {
//             techniques: 2,
//           },
//           children: [
//             {
//               name: 'Technique 1',
//               is_viewed: true,
//             },
//             {
//               name: 'Technique 2',
//             },
//           ],
//         },
//         {
//           name: 'CDE',
//           attributes: {
//             techniques: 2,
//           },
//           children: [
//             {
//               name: 'Technique 1',
//             },
//             {
//               name: 'Technique 2',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
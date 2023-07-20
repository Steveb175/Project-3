const db = require("./connection");
const { User, Category } = require("../models");

db.once("open", async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();

    console.log("Seeding categories...");
    const categories = await Category.insertMany([
      {
        name: "Back",
        workouts: [
          {
            name: "Back Extension",
            instructions:
              "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.",
            image: "../images/back1.jpg"
          },
          {
            name: "Deadlift",
            instructions:
              "Begin by having a platform or weight plates that you can stand on, usually 1-3 inches in height. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor.",
            image: "../images/back2.jpg"
          },
          {
            name: "Single Arm Lat Pulldown",
            instructions:
              "Stand facing the machine and grab the handle with one hand, using an overhand grip. Your palm should be facing away from your body, and your hand should be positioned slightly wider than shoulder-width apart.Initiate the movement by pulling your shoulder down and back. Exhale as you slowly pull the handle down toward your side, focusing on using your back muscles to perform the movement. Keep your elbow close to your body and aim to bring it as far down as possible.In a controlled manner, inhale as you slowly release the handle, allowing it to return to the starting position while maintaining tension on the lat muscles.",
            image: "../images/back3.jpg"
          }
        ]
      },
      {
        name: "Chest",
        workouts: [
          {
            name: "Dumbbell Flys",
            instructions:
              "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variations: You may want to use a palms facing forward version for different stimulation.",
            image: "../images/chest1.jpg"
          },
          {
            name: "Low Cable Crossovers",
            instructions:
              "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause.",
            image: "../images/chest2.jpg"
          },
          {
            name: "Pushups",
            instructions:
              "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.",
            image: "../images/chest3.jpg"
          }
        ]
      },
      {
        name: "Legs",
        workouts: [
          {
            name: "Barbell Hip Thrust",
            instructions:
              "Begin seated on the ground with a bench directly behind you. Have a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lean back against the bench so that your shoulder blades are near the top of it. Begin the movement by driving through your feet, extending your hips vertically through the bar. Your weight should be supported by your shoulder blades and your feet. Extend as far as possible, then reverse the motion to return to the starting position.",
            image: "../images/legs1.jpg"
          },
          {
            name: "Single Leg Press",
            instructions:
              "Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other.",
            image: "../images/legs2.jpg"
          },
          {
            name: "Squat",
            instructions:
              "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position. Repeat for the recommended amount of repetitions.  This type of squat allows a greater range of motion, and allows the trunk to maintain a more vertical position than other types of squats, due to foot position and the higher bar position.",
            image: "../images/legs3.jpg"
          }
        ]
      },
      {
        name: "Shoulders",
        workouts: [
          {
            name: "Bent Over Lateral Raises",
            instructions:
              "Stand facing the machine and grab the handle with one hand, using an overhand grip. Your palm should be facing away from your body, and your hand should be positioned slightly wider than shoulder-width apart.Initiate the movement by pulling your shoulder down and back. Exhale as you slowly pull the handle down toward your side, focusing on using your back muscles to perform the movement. Keep your elbow close to your body and aim to bring it as far down as possible.Pause briefly at the bottom of the movement, squeezing your back muscles to maximize the contraction.In a controlled manner, inhale as you slowly release the handle, allowing it to return to the starting position while maintaining tension on the lat muscles.",
            image: "../images/shoulders1.jpg"
          },
          {
            name: "Front Raises",
            instructions:
              "Hold the dumbbells in front of your thighs with your palms facing your body. This is your starting position.Exhale and, while keeping a slight bend in your elbows, raise one arm forward, in front of your body. Lift the dumbbell until your arm is parallel to the ground or slightly higher. Keep your palm facing down as you lift.In a controlled manner, inhale as you lower the dumbbell back to the starting position, maintaining control over the weight and keeping your movements smooth.",
            image: "../images/shoulders2.jpg"
          },
          {
            name: "Shoulder Press",
            instructions:
              "Start by standing with your feet shoulder-width apart. Hold a dumbbell in each hand at shoulder level, with your palms facing forward and your elbows bent.Exhale and extend your arms upward, pressing the dumbbells overhead. Keep your elbows slightly in front of your body as you lift.Once your arms are fully extended overhead, pause briefly at the top of the movement, squeezing your shoulder muscles. In a controlled manner, inhale as you lower the dumbbells back to the starting position at shoulder level, maintaining control over the weight and keeping your movements smooth.",
            image: "../images/shoulders3.jpg"
          }
        ]
      },
      {
        name: "Arms",
        workouts: [
          {
            name: "Cable Push Down",
            instructions:
              "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment.",
            image: "../images/arms1.jpg"
          },
          {
            name: "Incline Hammer curl",
            instructions:
              "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc.",
            image: "../images/arms2.jpg"
          },
          {
            name: "Skull Crusher",
            instructions:
              "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position. Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead. Lift the bar back to the starting position by extending the elbow and exhaling. Repeat.",
            image: "../images/arms3.jpg"
          },
          {
            name: "Zottman curl",
            instructions:
              "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Make sure the palms of the hands are facing each other. This will be your starting position. While holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Now during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky. Slowly begin to bring the dumbbells back down using the pronated grip. As the dumbbells close your thighs, start rotating the wrist so that you go back to a neutral (palms facing your body) grip. Repeat for the recommended amount of repetitions.",
            image: "../images/arms4.jpg"
          }
        ]
      },
      {
        name: "Abs",
        workouts: [
          {
            name: "BottomsUp",
            instructions:
              "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position. To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor. After a brief pause, return to the starting position.",
            image: "../images/abs1.jpg"
          },
          {
            name: "Cocoons",
            instructions:
              "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position.",
            image: "../images/abs2.jpg"
          },
          {
            name: "Planks",
            instructions:
              "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
            image: "../images/abs2.jpg"
          }
        ]
      }
    ]);

    console.log("categories and workouts seeded", categories);

    await User.deleteMany();

    console.log("users seeded");
    process.exit();
  } catch (error) {
    console.error("Error seeding data", error);
    process.exit(1);
  }
});

export class AppHelper {


  static getUserTypeString(num) {
    switch (num) {
      case 0:
        return 'Administrator';

      case 1:
        return 'Instructor';

      case 2:
        return 'Student';

      default:
        break;
    }
  }

}

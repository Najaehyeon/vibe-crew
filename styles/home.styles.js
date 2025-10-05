import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  alarmButton: {
    padding: 5,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 64,
  },
  filterMenu: {
    flexDirection: "row",
  },
  filterMenuText: {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 4,
  },
  dateContainer: {
    marginTop: 24,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
  },
  showAllDateButton: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 10,
    width: 72,
    height: 60,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  showAllDateButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 600,
  },
  dateContentContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  dates: {
    flex: 1,
    height: 80,
    marginLeft: 82,
  },
  dateItem: {
    width: 50,
    alignItems: 'center',
    marginRight: 15,
    paddingVertical: 10,
  },
  todayDateTime: {
    backgroundColor: COLORS.primary, // 오늘 날짜 배경색
    borderRadius: 10,
  },
  dayText: {
    fontSize: 14,
    color: COLORS.grey,
  },
  todayDayText: {
    color: "white",
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    color: COLORS.darkGrey,
  },
  todayDateText: {
    color: COLORS.white,
  },
  post: {
    flex: 1,
    flexDirection: "row",
    height: 120,
    marginTop: 12,
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: 'center',
    paddingRight: 12,
  },
  postLike: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  postImg: {
    width: 96,
    height: 96,
    margin: 12,
    borderRadius: 10,
    flexShrink: 0,
  },
  postContent: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'space-between',
    height: '100%',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  postCondition: {
    flexDirection: "row",
  },
  postConditionTitle: {
    fontSize: 11,
    marginLeft: 4,
    color: COLORS.grey,
  },
  postConditionText: {
    fontSize: 11,
    marginLeft: 4,
  }
});
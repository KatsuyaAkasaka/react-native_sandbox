import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  list: {
    flex: 3,
    alignItems: "stretch",
    flexDirection: "column",
  },
  item: {
    flex: 1,
    // backgroundColor: '',
    // alignItems: 'stretch',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  todocontent: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tododelete: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

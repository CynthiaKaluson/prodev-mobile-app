import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchGroup: {
        backgroundColor: "#34967C",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 16,
        fontWeight: "500",
    },
    searchControl: {
        fontSize: 14,
        color: "#666",
        paddingVertical: 4,
    },
    searchButton: {
        backgroundColor: "#34967C",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    filterGroup: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 15,
    },
    filterContainer: {
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: "#f8f8f8",
        borderRadius: 20,
        minWidth: 80,
    },
    listingContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    paginationContainer: {
        alignItems: "center",
        paddingVertical: 20,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    showMoreButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});

export { styles };

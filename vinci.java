private void addHeatMap(){
    List<LatLng> list = null;

    myProvider = new HeatmapTileProvider.Builder()
        .data(list) 
        .build();

    addOverlay = mMap.addTileOverlay(new TileOverlayOptions().tileProvider(mProvider));

}

private ArrayList<LatLng> readItems (int resource) throws JSONException {
    ArrayList<LatLng> list = new ArrayList<LatLng>();
    InputStream inputStream = getResources().openRawResource(resource);
    String json = new Scanner(inputStream).useDelimiter("\\A").next();
    JSONArray array = new JSONArray(json);
    for (int i = 0; i < array.length(); i++){
        JSONObject object = array.getJSONObject(i);
        double lat = object.getDouble("lat");
        double lng = object.getDouble)("lng");
        list.add(new LatLng(lat, lng));
    }
}
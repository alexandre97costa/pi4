package com.example.ficha8

import android.content.Context
import android.util.Log
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONException
import org.json.JSONObject
import pi4.main.Utils.BackendURL


class Req {
    fun AddToQueue(request:JsonObjectRequest, context: Context) {
        val queue = Volley.newRequestQueue(context)
        queue.add(request)
    }

    fun queryParamsToString(queryParams: JSONObject):String {
        // excusa de fazer o for se estiver vazio
        if (queryParams.length() == 0) {
            return ""
        }

        var returnString:String = "?"
        for (i in 0 until queryParams.names()!!.length()) {
            if (i != 0) {
                returnString += "&"
            }

            returnString +=
                java.net.URLEncoder.encode(
                    queryParams.names()?.getString(i).toString(),
                    "UTF-8") + "=" +
                java.net.URLEncoder.encode(
                    queryParams.get(queryParams.names()!!.getString(i)).toString(),
                    "UTF-8"
                )
        }
        return returnString;
    }

    fun GET(path:String, queryParams: JSONObject, requestBody:JSONObject, context: Context, then: (response:JSONObject) -> Unit) {

        val url = BackendURL + path + queryParamsToString(queryParams)
        Log.i("Request GET", url)
        val request = JsonObjectRequest(
            Request.Method.GET,
            url,
            requestBody,
            { res ->
                Log.i("Request GET\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace() }
        )
        AddToQueue(request, context)
    }

    fun POST(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, then: (response:JSONObject) -> Unit) {
        val request = JsonObjectRequest(
            Request.Method.POST,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request POST\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        )
        AddToQueue(request, context)
    }

    fun PUT(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, then: (response:JSONObject) -> Unit) {
        val request = JsonObjectRequest(
            Request.Method.PUT,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request PUT\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        )
        AddToQueue(request, context)
    }

    fun PATCH(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, then: (response:JSONObject) -> Unit) {
        val request = JsonObjectRequest(
            Request.Method.PATCH,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request PATCH\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        )
        AddToQueue(request, context)
    }

    fun DELETE(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, then: (response:JSONObject) -> Unit) {
        val request = JsonObjectRequest(
            Request.Method.DELETE,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request DELETE\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        )
        AddToQueue(request, context)
    }
}
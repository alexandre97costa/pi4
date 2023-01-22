package com.example.ficha8

import android.content.Context
import android.util.Log
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject
import pi4.main.Utils.BackendURL
import java.nio.charset.Charset


object Req {
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

    fun GET(
        path:String,
        queryParams: JSONObject,
        requestBody:JSONObject,
        context: Context,
        token: String,
        then: (res:JSONObject) -> Unit
    ) {
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
            { error ->
                Log.i("caralho", "esta merda não deu")
            }
        )
        if(token != "")
            request.headers["Authorization"] = "Bearer {$token}"

        AddToQueue(request, context)
    }

    fun POST(
        path: String,
        queryParams: JSONObject,
        requestBody:JSONObject,
        context: Context,
        token: String,
        //then: (res:JSONObject) -> Unit
    ) {
        Log.i("request body\n", requestBody.toString(2))

        val request = JsonObjectRequest(
            Request.Method.POST,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("dentro do post","estamos cá dentrooooo")
                // Log.i("Request POST\n", res.toString(2))
                // then(res)
            },
            { error ->
                Log.i("dentro dela","estamos cá dentrooooo (do erro)")
            }
        )
        /*
        if(token != "")
            request.headers["Authorization"] = "Bearer {$token}"
        */

        AddToQueue(request, context)
    }

    fun PUT(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
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
        if(token != "")
            request.headers["Authorization"] = "Bearer {$token}"
        AddToQueue(request, context)
    }

    fun PATCH(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
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
        if(token != "")
            request.headers["Authorization"] = "Bearer {$token}"
        AddToQueue(request, context)
    }

    fun DELETE(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
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
        if(token != "")
            request.headers["Authorization"] = "Bearer {$token}"
        AddToQueue(request, context)
    }
}